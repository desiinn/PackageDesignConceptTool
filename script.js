// 画像ファイル名リスト（タグ付き）
// ファイル名の形式: keyword1_keyword2_keyword3.jpg
// 例: luxury_elegant_minimal.jpg
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

// 選択されたターゲット属性
let selectedTarget = '';

// 選択された売り場
let selectedMarkets = [];

// ターゲット属性の日本語マップ
const targetMap = {
    'family': 'ファミリー（日常・安心）',
    'worker': '働く単身者（時短・利便性）',
    'senior': 'シニア（健康・高品質）',
    'reward': '自分へのご褒美（贅沢・トレンド）',
    'health': '健康・美容（機能性・自然派）',
    'youth': '若年層（低価格・話題性）',
    'gift': '観光・ギフト（道外向け・プレミアム）'
};

// 売り場の日本語マップ
const marketMap = {
    'tourism': '観光・玄関口（空港・土産店・観光施設売店等）',
    'premium': '百貨店・ギフト（デパ地下・セレクトショップ等）',
    'daily': '日常・量販店（スーパー・コンビニ等）',
    'direct': '直接販売（自社EC・店舗・道の駅等）'
};

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

// ターゲット属性ボタンのクリックイベント
document.getElementById('targetGrid').addEventListener('click', function(e) {
    const targetBtn = e.target.closest('.target-btn');
    if (targetBtn) {
        const target = targetBtn.dataset.target;
        
        // すべてのボタンの選択を解除
        document.querySelectorAll('.target-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // クリックされたボタンを選択状態にする
        if (selectedTarget === target) {
            // 既に選択されている場合は解除
            selectedTarget = '';
        } else {
            // 新しく選択
            targetBtn.classList.add('selected');
            selectedTarget = target;
        }
    }
});

// 売り場ボタンのクリックイベント
document.getElementById('marketGrid').addEventListener('click', function(e) {
    const marketBtn = e.target.closest('.target-btn');
    if (marketBtn) {
        const market = marketBtn.dataset.market;
        
        if (marketBtn.classList.contains('selected')) {
            marketBtn.classList.remove('selected');
            selectedMarkets = selectedMarkets.filter(m => m !== market);
        } else {
            marketBtn.classList.add('selected');
            selectedMarkets.push(market);
        }
    }
});

// 画像グリッドの更新（OR条件でフィルタリング）
function updateImageGrid() {
    const imagesGrid = document.getElementById('imagesGrid');
    imagesGrid.innerHTML = '';
    
    if (selectedKeywords.length === 0) {
        imagesGrid.innerHTML = '<div class="no-images">キーワードを選択すると、関連する画像が表示されます</div>';
        return;
    }
    
    // 選択されたキーワードのいずれか1つでも含まれる画像をフィルタリング（OR条件）
    const matchingImages = availableImages.filter(image => {
        // 選択されたキーワードのうち、少なくとも1つが画像のタグに含まれているか確認
        return selectedKeywords.some(keyword => image.tags.includes(keyword));
    });
    
    if (matchingImages.length === 0) {
        imagesGrid.innerHTML = '<div class="no-images">選択されたキーワードに該当する画像がありません</div>';
        return;
    }
    
    // マッチ度でソート（より多くのキーワードにマッチする画像を先に表示）
    matchingImages.sort((a, b) => {
        const aMatches = selectedKeywords.filter(keyword => a.tags.includes(keyword)).length;
        const bMatches = selectedKeywords.filter(keyword => b.tags.includes(keyword)).length;
        return bMatches - aMatches; // 降順（マッチ数が多い順）
    });
    
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

// コンセプトシートの生成（別ウィンドウで表示）
function generateConceptSheet() {
    const productName = document.getElementById('productName').value.trim();
    const productCategory = document.getElementById('productCategory').value.trim();
    const productUnit = document.getElementById('productUnit').value.trim();
    const referenceProducts = document.getElementById('referenceProducts').value.trim();
    const remarks = document.getElementById('remarks').value.trim();
    const marketOther = document.getElementById('marketOther').value.trim();
    
    // バリデーション
    if (!productName) {
        alert('商品名（ブランド名）を入力してください');
        return;
    }
    
    if (!productCategory) {
        alert('製品のカテゴリー（一般名称）を入力してください');
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
    
    // キーワードを日本語に変換
    const keywordNames = selectedKeywords.map(keyword => keywordMap[keyword] || keyword);
    
    // 画像のHTML生成
    let imagesHTML = '';
    selectedImages.forEach(imgData => {
        imagesHTML += `<img src="${imgData.url}" alt="参考画像" style="width: 100%; border-radius: 8px; border: 2px solid #e0e0e0;">`;
    });
    
    // 売り場の表示用テキスト作成
    let marketText = selectedMarkets.map(m => marketMap[m]).join('、 ');
    if (marketOther) {
        marketText += (marketText ? ' / ' : '') + marketOther;
    }

    // ターゲット属性のHTML
    const targetHTML = selectedTarget ? `
        <div class="sheet-section">
            <h3>ターゲット属性</h3>
            <div class="sheet-target">${targetMap[selectedTarget] || selectedTarget}</div>
        </div>
    ` : '';
    
    // 参考製品のHTML
    const referenceHTML = referenceProducts ? `
        <div class="sheet-section">
            <h3>参考既存製品</h3>
            <div class="sheet-text">${referenceProducts}</div>
        </div>
    ` : '';
    
    // 備考のHTML
    const remarksHTML = remarks ? `
        <div class="sheet-section">
            <h3>その他備考</h3>
            <div class="sheet-text">${remarks}</div>
        </div>
    ` : '';
    
    // コンセプトシートのHTMLを生成
    const conceptSheetHTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>パッケージデザインコンセプトシート - ${productName}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
            background: #f5f5f5;
            padding: 40px 20px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sheet-header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 3px solid #314c6a;
            padding-bottom: 20px;
        }
        
        .sheet-header h1 {
            font-size: 28px;
            color: #333;
            margin-bottom: 10px;
        }
        
        .product-name {
            font-size: 22px;
            color: #314c6a;
            font-weight: bold;
            margin: 10px 0;
        }
        
        .product-category {
            font-size: 16px;
            color: #666;
            margin: 5px 0;
        }
        
        .date {
            color: #999;
            font-size: 14px;
            margin-top: 10px;
        }
        
        .sheet-section {
            margin-bottom: 30px;
        }
        
        .sheet-section h3 {
            background: #314c6a;
            color: white;
            padding: 10px 15px;
            border-radius: 5px;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .sheet-target {
            background: #f5f7ff;
            border: 2px solid #314c6a;
            padding: 12px 20px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
        }
        
        .sheet-keywords {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .sheet-keyword {
            background: #f5f7ff;
            border: 2px solid #314c6a;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
        }
        
        .sheet-images {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
        }
        
        .sheet-text {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 5px;
            line-height: 1.8;
            white-space: pre-wrap;
        }
        
        .action-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #f0f0f0;
        }
        
        .btn {
            padding: 15px 40px;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #3d5a73 0%, #314c6a 100%);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.1); 
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .btn-primary:hover {
            background: linear-gradient(135deg, #4b6d8a 0%, #3d5a73 100%);
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
        
        .btn-secondary {
            background: #f0f0f0;
            color: #333;
        }
        
        .btn-secondary:hover {
            background: #e0e0e0;
        }
        
        @media (max-width: 768px) {
            .sheet-images {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .container {
                padding: 20px;
            }
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .container {
                box-shadow: none;
                padding: 20px;
            }
            
            .action-buttons {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="sheet-header">
            <h1>パッケージデザインコンセプトシート</h1>
            <p class="product-name">${productName}</p>
            <p class="product-category">カテゴリー: ${productCategory}/ 内容量: ${productUnit}</p>
            <p class="date">作成日: ${new Date().toLocaleDateString('ja-JP')}</p>
        </div>
        
        ${targetHTML}

        <div class="sheet-section">
            <h3>想定している売り場</h3>
            <div class="sheet-text">${marketText || '未選択'}</div>
        </div>
        
        <div class="sheet-section">
            <h3>選択キーワード</h3>
            <div class="sheet-keywords">
                ${keywordNames.map(name => `<span class="sheet-keyword">${name}</span>`).join('')}
            </div>
        </div>
        
        <div class="sheet-section">
            <h3>参考画像</h3>
            <div class="sheet-images">
                ${imagesHTML}
            </div>
        </div>
        
        ${referenceHTML}
        
        ${remarksHTML}
        
        <div class="action-buttons">
            <button class="btn btn-primary" onclick="window.print()">印刷 / PDFとして保存</button>
            <button class="btn btn-secondary" onclick="window.close()">閉じる</button>
        </div>
    </div>
</body>
</html>
    `;
    
    // 新しいウィンドウを開いてコンセプトシートを表示
    const newWindow = window.open('', '_blank', 'width=1000,height=800,scrollbars=yes');
    if (newWindow) {
        newWindow.document.write(conceptSheetHTML);
        newWindow.document.close();
    } else {
        alert('ポップアップがブロックされました。ブラウザの設定でポップアップを許可してください。');
    }
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
    document.getElementById('productCategory').value = ''; 
    document.getElementById('productUnit').value = ''; 
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