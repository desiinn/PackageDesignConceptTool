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
    // 1. 基本情報の取得
    const productName = document.getElementById('productName').value || '未入力';
    const productCategory = document.getElementById('productCategory').value || '未入力';
    const productUnit = document.getElementById('productUnit').value || '未入力';
    const referenceProducts = document.getElementById('referenceProducts').value || 'なし';
    const remarks = document.getElementById('remarks').value || 'なし';

    // 2. ターゲットの取得（グローバル変数selectedTargetを使用）
    const targetName = selectedTarget ? (targetMap[selectedTarget] || selectedTarget) : '未選択';

    // 3. 売り場の取得（グローバル変数selectedMarketsを使用）
    const marketText = selectedMarkets && selectedMarkets.length > 0
        ? selectedMarkets.map(m => marketMap[m] || m).join(' / ')
        : '未選択';

    // 4. キーワードの取得（グローバル変数selectedKeywordsを使用）
    const keywordNames = selectedKeywords && selectedKeywords.length > 0
        ? selectedKeywords.map(k => keywordMap[k] || k)
        : [];

    // 5. 画像の取得（グローバル変数selectedImagesを使用）
    const imagesHTML = selectedImages && selectedImages.length > 0
        ? selectedImages.map(img => `<img src="${img.url}" style="width:100%; border-radius:4px; border:1px solid #ddd;">`).join('')
        : '<p>選択された画像はありません</p>';

    // 商品名の長さに応じてフォントサイズを調整
    let fontSize = '24pt';
    if (productName.length > 20) {
        fontSize = '16pt'; // かなり長い場合
    } else if (productName.length > 12) {
        fontSize = '18pt'; // やや長い場合
    }

    // ヘッダー上部の隙間（作成日／タイトルとの重なり回避）を調整
    let headerPadding = 10; // デフォルト
    if (productName.length > 20) {
        headerPadding = 48;
    } else if (productName.length > 12) {
        headerPadding = 32;
    }

    // --- コンセプトシートのHTML組み立て ---
    const conceptSheetHTML = `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <style>
        * { box-sizing: border-box; }
        body { font-family: sans-serif; background: white; margin: 0; padding: 0; color: #333; font-size: 10.5pt; }
        .container { max-width: 800px; margin: 0 auto; padding: 20mm; }
        .sheet-header { position: relative; margin-bottom: 12px; border-bottom: 1.5pt solid #314c6a; padding-top: ${headerPadding}px; padding-bottom: 8px; text-align: center; }
        .header-top-left, .header-top-right { position: absolute; top: 0; font-size: 8pt; color: #999; }
        .header-top-left { left: 0; } .header-top-right { right: 0; }
        .product-name-display { font-size: ${fontSize}; line-height: 1.2; margin: 10px 0 4px; color: #09203f; word-wrap: break-word; overflow-wrap: break-word; font-weight: bold; }
        .product-sub-info { font-size: 12pt; color: #666; }
        .two-column { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 6px; }
        .sheet-section { margin-bottom: 10px; }
        .sheet-section h3 { font-size: 12pt; padding: 2px 0 4px 10px; border-left: 4pt solid #314c6a; border-bottom: 1px solid #eee; margin-bottom: 6px; color: #314c6a; }
        .sheet-text { padding: 8px; border: 1px solid #eee; min-height: 36px; white-space: pre-wrap; background: #fff; }
        .sheet-keyword { border: 1px solid #314c6a; color: #314c6a; padding: 2px 10px; border-radius: 15px; font-size: 9pt; display: inline-block; margin: 2px; }
        .sheet-images { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .action-buttons { display: flex; gap: 24px; justify-content: center; align-items: center; margin-top: 30px; }
        .btn { padding: 10px 20px; border: none; border-radius: 5px; font-size: 12pt; font-weight: bold; cursor: pointer; line-height: 1; }
        .btn-primary { background: #314c6a; color: white; border: 1px solid rgba(255, 255, 255, 0.1); }
        .btn-primary:hover {background: #3d5a73; }
        .btn-secondary { background: #f0f0f0; color: #333; }
        .btn-secondary:hover { background: #e0e0e0; }
        @media print { .action-buttons { display: none; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="sheet-header">
            <div class="header-top-left">パッケージデザインコンセプトシート</div>
            <div class="header-top-right">作成日: ${new Date().toLocaleDateString('ja-JP')}</div>
            <h1 class="product-name-display">${productName}</h1>
            <p class="product-sub-info">${productCategory} / ${productUnit}</p>
        </div>

        <div class="two-column">
            <div class="sheet-section">
                <h3>ターゲット</h3>
                <div class="sheet-text">${targetName}</div>
            </div>
            <div class="sheet-section">
                <h3>想定売り場</h3>
                <div class="sheet-text">${marketText}</div>
            </div>
        </div>

        <div class="sheet-section">
            <h3>選択キーワード</h3>
            <div class="sheet-keywords">
                ${keywordNames.length > 0 ? keywordNames.map(name => `<span class="sheet-keyword">${name}</span>`).join('') : '未選択'}
            </div>
        </div>

        <div class="sheet-section">
            <h3>参考イメージ</h3>
            <div class="sheet-images">${imagesHTML}</div>
        </div>

        <div class="sheet-section">
            <h3>既存製品・備考</h3>
            <div class="sheet-text">【参考製品】\n${referenceProducts}\n\n【デザイン要望】\n${remarks}</div>
        </div>

        <div class="action-buttons">
            <button class="btn btn-primary" onclick="window.print()">印刷 / PDF保存</button>
            <button class="btn btn-secondary" onclick="window.close()">閉じる</button>
        </div>
    </div>
</body>
</html>`;

    const newWindow = window.open('', '_blank', 'width=1000,height=900,scrollbars=yes');
    if (newWindow) {
        newWindow.document.write(conceptSheetHTML);
        newWindow.document.close();
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
    document.getElementById('marketText').value = '';
    document.getElementById('referenceProducts').value = '';
    document.getElementById('remarks').value = '';
    
    // キーワード選択をクリア
    document.querySelectorAll('.keyword-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    selectedKeywords = [];
    
    // ターゲット・売り場の選択をクリア
    document.querySelectorAll('.target-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    selectedTarget = '';
    selectedMarkets = [];

    // 画像選択をクリア
    // （DOM上の選択表示も念のため解除）
    document.querySelectorAll('.image-card.selected').forEach(c => c.classList.remove('selected'));
    selectedImages = [];
    updateSelectedCount();
    updateImageGrid();
    
    // コンセプトシートを閉じる
    closeConceptSheet();
}