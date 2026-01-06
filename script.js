// 画像ファイル名リスト（タグ付き）
// ファイル名の形式: keyword1_keyword2_keyword3.jpg
// 例: luxury_modern_simple.jpg
const pictImages = [
    "luxury_elegant_minimal.jpg",
    "luxury_modern_simple.jpg",
    "elegant_traditional_warm.jpg",
    "modern_minimal_simple.jpg",
    "modern_fresh_photo.jpg",
    "minimal_simple_natural.jpg",
    "natural_healthy_fresh.jpg",
    "natural_rustic_handmade.jpg",
    "natural_warm_simple.jpg",
    "healthy_fresh_natural.jpg",
    "healthy_simple_minimal.jpg",
    "traditional_retro_warm.jpg",
    "traditional_elegant_luxury.jpg",
    "retro_warm_rustic.jpg",
    "retro_traditional_handmade.jpg",
    "cute_warm_natural.jpg",
    "cute_pop_simple.jpg",
    "simple_minimal_modern.jpg",
    "simple_natural_healthy.jpg",
    "rustic_handmade_warm.jpg",
    "rustic_natural_traditional.jpg",
    "handmade_warm_rustic.jpg",
    "handmade_natural_simple.jpg",
    "warm_natural_traditional.jpg",
    "fresh_healthy_natural.jpg",
    "fresh_modern_simple.jpg",
    "pop_cute_modern.jpg",
    "photo_modern_minimal.jpg",
    "photo_natural_fresh.jpg",
    // ... 実際の画像ファイルに合わせて追加
];

// キーワードの日本語⇔英語対応マップ
const keywordMap = {
    'luxury': '高級感',
    'elegant': '優雅',
    'modern': 'モダン',
    'minimal': '洗練された',
    'natural': 'ナチュラル',
    'healthy': '健康的',
    'traditional': '伝統的',
    'retro': 'レトロ',
    'cute': 'かわいい',
    'simple': 'シンプル',
    'rustic': '素朴な',
    'handmade': '手作り感',
    'warm': '温かい',
    'fresh': '爽やか',
    'pop': 'ポップ',
    'photo': '写真メイン'
};

// 画像データベース（タグ付きで管理）
const availableImages = pictImages.map(filename => {
    // 拡張子を除去してタグに分割
    const tags = filename.replace(/\.[^/.]+$/, "").split("_");
    return {
        src: `images/pict/${filename}`,
        tags: tags,
        filename: filename
    };
});

// 選択されたキーワード
let selectedKeywords = [];

// 選択された画像（URLと順番を保持）
let selectedImages = [];

// キーワードボタンのクリックイベント
document.getElementById('keywordsGrid').addEventListener('click', function(e) {
    if (e.target.classList.contains('keyword-btn')) {
        const keyword = e.target.dataset.keyword;
        
        if (e.target.classList.contains('selected')) {
            e.target.classList.remove('selected');
            selectedKeywords = selectedKeywords.filter(k => k !== keyword);
        } else {
            e.target.classList.add('selected');
            selectedKeywords.push(keyword);
        }
        
        updateImageGrid();
    }
});

// 画像グリッドの更新（AND条件でフィルタリング）
function updateImageGrid() {
    const imagesGrid = document.getElementById('imagesGrid');
    imagesGrid.innerHTML = '';
    
    if (selectedKeywords.length === 0) {
        imagesGrid.innerHTML = '<div class="no-images">キーワードを選択すると、関連する画像が表示されます</div>';
        return;
    }
    
    // 選択されたキーワードに一致する画像をフィルタリング（AND条件）
    const matchingImages = availableImages.filter(image => {
        // 選択されたすべてのキーワードが画像のタグに含まれているか確認
        return selectedKeywords.every(keyword => image.tags.includes(keyword));
    });
    
    if (matchingImages.length === 0) {
        imagesGrid.innerHTML = '<div class="no-images">選択されたキーワードの組み合わせに該当する画像がありません</div>';
        return;
    }
    
    // 画像カードを生成
    matchingImages.forEach((imageData, index) => {
        const imageCard = document.createElement('div');
        imageCard.className = 'image-card';
        imageCard.dataset.imageUrl = imageData.src;
        
        const img = document.createElement('img');
        img.src = imageData.src;
        img.alt = 'パッケージデザイン参考画像';
        img.onerror = function() {
            // 画像が読み込めない場合のフォールバック
            this.src = 'https://via.placeholder.com/400x400?text=No+Image';
        };
        
        const badge = document.createElement('div');
        badge.className = 'select-badge';
        badge.textContent = '✓';
        
        imageCard.appendChild(img);
        imageCard.appendChild(badge);
        
        // すでに選択されている画像の場合は選択状態にする
        if (selectedImages.find(img => img.url === imageData.src)) {
            imageCard.classList.add('selected');
        }
        
        imageCard.addEventListener('click', function() {
            toggleImageSelection(imageCard, imageData.src);
        });
        
        imagesGrid.appendChild(imageCard);
    });
}

// 画像選択のトグル
function toggleImageSelection(card, imageUrl) {
    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        selectedImages = selectedImages.filter(img => img.url !== imageUrl);
    } else {
        if (selectedImages.length >= 10) {
            alert('画像は最大10枚まで選択できます');
            return;
        }
        card.classList.add('selected');
        selectedImages.push({ url: imageUrl, order: selectedImages.length + 1 });
    }
    
    updateSelectedCount();
}

// 選択枚数の更新
function updateSelectedCount() {
    const count = selectedImages.length;
    document.getElementById('selectedCount').textContent = `${count}/10枚選択`;
}

// コンセプトシートの生成
function generateConceptSheet() {
    const productName = document.getElementById('productName').value.trim();
    const referenceProducts = document.getElementById('referenceProducts').value.trim();
    const remarks = document.getElementById('remarks').value.trim();
    
    // バリデーション
    if (!productName) {
        alert('製品名を入力してください');
        return;
    }
    
    if (selectedKeywords.length === 0) {
        alert('少なくとも1つのキーワードを選択してください');
        return;
    }
    
    if (selectedImages.length < 5) {
        alert('画像を5枚以上選択してください');
        return;
    }
    
    // コンセプトシートに情報を設定
    document.getElementById('sheetProductName').textContent = productName;
    document.getElementById('sheetDate').textContent = new Date().toLocaleDateString('ja-JP');
    
    // キーワードを表示（英語キーから日本語に変換）
    const keywordsContainer = document.getElementById('sheetKeywords');
    keywordsContainer.innerHTML = '';
    selectedKeywords.forEach(keyword => {
        const span = document.createElement('span');
        span.className = 'sheet-keyword';
        span.textContent = keywordMap[keyword] || keyword;
        keywordsContainer.appendChild(span);
    });
    
    // 画像を表示
    const imagesContainer = document.getElementById('sheetImages');
    imagesContainer.innerHTML = '';
    selectedImages.forEach(imgData => {
        const img = document.createElement('img');
        img.src = imgData.url;
        img.alt = '参考画像';
        imagesContainer.appendChild(img);
    });
    
    // 参考製品
    if (referenceProducts) {
        document.getElementById('sheetReferenceSection').style.display = 'block';
        document.getElementById('sheetReference').textContent = referenceProducts;
    } else {
        document.getElementById('sheetReferenceSection').style.display = 'none';
    }
    
    // 備考
    if (remarks) {
        document.getElementById('sheetRemarksSection').style.display = 'block';
        document.getElementById('sheetRemarks').textContent = remarks;
    } else {
        document.getElementById('sheetRemarksSection').style.display = 'none';
    }
    
    // コンセプトシートを表示
    document.getElementById('conceptSheet').classList.add('visible');
    document.getElementById('conceptSheet').scrollIntoView({ behavior: 'smooth' });
}

// コンセプトシートを閉じる
function closeConceptSheet() {
    document.getElementById('conceptSheet').classList.remove('visible');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// すべてリセット
function resetAll() {
    if (!confirm('すべての入力内容がリセットされます。よろしいですか?')) {
        return;
    }
    
    // 入力フィールドをクリア
    document.getElementById('productName').value = '';
    document.getElementById('referenceProducts').value = '';
    document.getElementById('remarks').value = '';
    
    // キーワード選択をクリア
    document.querySelectorAll('.keyword-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    selectedKeywords = [];
    
    // 画像選択をクリア
    selectedImages = [];
    updateSelectedCount();
    updateImageGrid();
    
    // コンセプトシートを閉じる
    closeConceptSheet();
}