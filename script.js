// 画像ファイル名リスト（タグ付き）
// ファイル名の形式: keyword1_keyword2_keyword3.jpg
// 例: luxury_elegant_minimal.jpg
const pictImages = [
"cute.jpeg",
"cute_elegant.jpeg",
"cute_elegant_2.jpeg",
"cute_elegant_3.jpeg",
"cute_handmade_retro.jpeg",
"cute_natural.jpeg",
"cute_natural_2.jpeg",
"cute_natural_3.jpeg",
"cute_natural_healthy.jpeg",
"cute_pop.jpeg",
"cute_pop_modern_.jpeg",
"cute_pop_modern_simple.jpeg",
"cute_pop_retro.jpeg",
"cute_rustic_handmade.jpeg",
"cute_rustic_handmade_warm.jpeg",
"cute_simple_minimal.jpeg",
"elegant.jpeg",
"elegant_10.jpeg",
"elegant_11.jpeg",
"elegant_12.jpeg",
"elegant_13.jpeg",
"elegant_2.jpeg",
"elegant_3.jpeg",
"elegant_5.jpeg",
"elegant_6.jpeg",
"elegant_7.jpeg",
"elegant_8.jpeg",
"elegant_9.jpeg",
"elegant_cute.jpeg",
"elegant_cute_2.jpeg",
"elegant_cute_modern.jpeg",
"elegant_modern_photo.jpeg",
"elegant_natural.jpeg",
"elegant_natural_2.jpeg",
"elegant_photo_fresh_natural.jpeg",
"elegant_simple.jpeg",
"elegant_simple_2.jpeg",
"elegant_simple_3.jpeg",
"elegant_warm.jpeg",
"elegant_warm_minimal.jpeg",
"fresh.jpeg",
"fresh_2.jpeg",
"fresh_3.jpeg",
"fresh_4.jpeg",
"fresh_5.jpeg",
"fresh_elegant.jpeg",
"fresh_elegant_2.jpeg",
"fresh_modern_simple.jpeg",
"fresh_natural.jpeg",
"fresh_natural_2.jpeg",
"fresh_pop.jpeg",
"fresh_pop_2.jpeg",
"fresh_simple.jpeg",
"handmade_natural_fresh_warm.jpeg",
"handmade_rustic_cute_warm.jpeg",
"handmade_rustic_elegant_healthy.jpeg",
"handmade_traditional_rustic.jpeg",
"handmade_warm_cute.jpeg",
"handmade_warm_simple.jpeg",
"handmade_warm_simple_natural.jpeg",
"healthy.jpeg",
"healthy_2.jpeg",
"healthy_3.jpeg",
"healthy_4.jpeg",
"healthy_fresh.jpeg",
"healthy_fresh_2.jpeg",
"healthy_natural.jpeg",
"healthy_natural_2.jpeg",
"healthy_natural_3.jpeg",
"healthy_natural_4.jpeg",
"healthy_natural_5.jpeg",
"healthy_natural_6.jpeg",
"healthy_natural_fresh.jpeg",
"healthy_natural_simple.jpeg",
"healthy_natural_simple_2.jpeg",
"healthy_natural_simple_3.jpeg",
"healthy_natural_simple_4.jpeg",
"healthy_natural_warm.jpeg",
"healthy_simple_pop_minimal.jpeg",
"healthy_warm.jpeg",
"healthy_warm_2.jpeg",
"luxury.jpeg",
"luxury_10.jpeg",
"luxury_11.jpeg",
"luxury_12.jpeg",
"luxury_13.jpeg",
"luxury_14.jpeg",
"luxury_15.jpeg",
"luxury_16.jpeg",
"luxury_2.jpeg",
"luxury_3.jpeg",
"luxury_4.jpeg",
"luxury_5.jpeg",
"luxury_6.jpeg",
"luxury_7.jpeg",
"luxury_8.jpeg",
"luxury_elegant.jpeg",
"luxury_elegant_2.jpeg",
"luxury_elegant_3.jpeg",
"luxury_elegant_4.jpeg",
"luxury_elegant_modern.jpeg",
"luxury_elegant_photo.jpeg",
"luxury_elegant_retro.jpeg",
"luxury_elegant_retro_2.jpeg",
"luxury_elegant_simple_modern.jpeg",
"luxury_elegant_traditional_simple.jpeg",
"luxury_modern_simple.jpeg",
"luxury_natural.jpeg",
"luxury_photo_elegant.jpeg",
"luxury_simple.jpeg",
"luxury_simple_2.jpeg",
"luxury_simple_3.jpeg",
"luxury_simple_traditional.jpeg",
"luxur_9.jpeg",
"minimal.jpeg",
"minimal_cute_warm_simple.jpeg",
"minimal_luxury.jpeg",
"minimal_modern_simple_rustic.jpeg",
"minimal_natural_handmade.jpeg",
"minimal_natural_simple_retro.jpeg",
"minimal_natural_traditional_2.jpeg",
"minimal_natural_warm_cute.jpeg",
"minimal_pop_rustic_simple.jpeg",
"minimal_simple_handmade.jpeg",
"modern_luxury_healthy_photo.jpeg",
"modern_luxury_warm.jpeg",
"modern_minimal_cute_simple.jpeg",
"modern_minimal_health_warm.jpeg",
"modern_minimal_pop_rustic.jpeg",
"modern_minimal_simple.jpeg",
"modern_minimal_simple_2.jpeg",
"modern_minimal_simple_elegant.jpeg",
"modern_minimal_simple_healthy.jpeg",
"modern_minimal_simple_rustic.jpeg",
"modern_minimal_simple_rustic_pop.jpeg",
"modern_natural_healthy_photo.jpeg",
"modern_natural_healthy_simple.jpeg",
"modern_natural_simple_fresh.jpeg",
"modern_pop.jpeg",
"modern_pop_cute_2.jpeg",
"modern_pop_healthy.jpeg",
"modern_pop_minimal_cute.jpeg",
"modern_pop_photo.jpeg",
"modern_pop_simple_fresh.jpeg",
"modern_pop_simple_fresh_2.jpeg",
"modern_pop_traditional.jpeg",
"modern_simple_minimal_elegant.jpeg",
"modern_simple_rustic_handmade.jpeg",
"natural_cute_handmade_warm.jpeg",
"natural_cute_warm_pop.jpeg",
"natural_elegant_rustic.jpeg",
"natural_handmade.jpeg",
"natural_handmade_2.jpeg",
"natural_handmade_3.jpeg",
"natural_healthy_rustic_photo.jpeg",
"natural_healthy_simple.jpeg",
"natural_minimal_fresh.jpeg",
"natural_minimal_rustic_warm_handmade.jpeg",
"natural_minimal_simple_cute.jpeg",
"natural_modern.jpeg",
"natural_retro_rustic_handmade.jpeg",
"natural_retro_rustic_simple.jpeg",
"natural_retro_warm_rustic.jpeg",
"natural_rustic_handmade.jpeg",
"natural_rustic_handmade_elegant.jpeg",
"natural_rustic_handmade_warm.jpeg",
"natural_rustic_handmade_warm_2.jpeg",
"natural_rustic_handmade_warm_3.jpeg",
"natural_rustic_handmade_warm_4.jpeg",
"natural_rustic_handmade_warm_5.jpeg",
"natural_traditional.jpeg",
"natural_traditional_elegant_simple.jpeg",
"natural_traditional_elegant_warm.jpeg",
"photo.jpeg",
"photo_2.jpeg",
"photo_3.jpeg",
"photo_4.jpeg",
"photo_5.jpeg",
"photo_6.jpeg",
"photo_7.jpeg",
"photo_elegant_fresh_natural_luxury.jpeg",
"photo_fresh_elegant_natural.jpeg",
"photo_fresh_luxury_elegant.jpeg",
"photo_fresh_simple_healthy.jpeg",
"photo_luxury.jpeg",
"photo_luxury_2.jpeg",
"photo_luxury_traditional.jpeg",
"photo_modern_minimal.jpeg",
"photo_natural_luxury_healthy.jpeg",
"photo_natural_rustic_warm.jpeg",
"photo_natural_simple.jpeg",
"photo_traditional_warm.jpeg",
"photo_warm_simple.jpeg",
"photo_warm_traditional_healthy.jpeg",
"pop_cute_modern_simple.jpeg",
"pop_cute_modern_simple_2.jpeg",
"pop_cute_simple.jpeg",
"pop_modern_cute_fresh.jpeg",
"pop_modern_fresh_cute.jpeg",
"pop_modern_natural_fresh.jpeg",
"pop_photo_cute_modern.jpeg",
"pop_photo_fresh_modern.jpeg",
"retro.jpeg",
"retro_2.jpeg",
"retro_3.jpeg",
"retro_4.jpeg",
"retro_5.jpeg",
"retro_cute_pop_modern.jpeg",
"retro_elegant.jpeg",
"retro_elegant_2.jpeg",
"retro_elegant_3.jpeg",
"retro_elegant_4.jpeg",
"retro_elegant_5.jpeg",
"retro_elegant_6.jpeg",
"retro_elegant_7.jpeg",
"retro_handmade.jpeg",
"retro_pop.jpeg",
"retro_pop_2.jpeg",
"retro_pop_3.jpeg",
"retro_pop_4.jpeg",
"retro_pop_5.jpg",
"retro_pop_6.jpeg",
"retro_pop_7.jpeg",
"retro_rustic_pop_warm.jpeg",
"retro_simple_warm.jpeg",
"retro_traditional.jpeg",
"rustic_simple_minimal_warm.jpeg",
"rustic_simple_modern.jpeg",
"rustic_warm_natural_simple.jpeg",
"simple_cute_natural_fresh.jpeg",
"simple_minimal_modern.jpeg",
"simple_minimal_rustic_warm.jpeg",
"simple_modern_minimal.jpeg",
"simple_modern_minimal_2.jpeg",
"simple_natural.jpeg",
"simple_rustic_modern_minimal.jpeg",
"traditional.jpeg",
"traditional_2.jpeg",
"traditional_3.jpeg",
"traditional_4.jpeg",
"traditional_5.jpeg",
"traditional_6.jpeg",
"traditional_elegant.jpeg",
"traditional_elegant_2.jpeg",
"traditional_elegant_luxury.jpeg",
"traditional_elegant_natural_.jpeg",
"traditional_luxury_photo.jpeg",
"traditional_minimal_simple.jpeg",
"traditional_modern.jpeg",
"traditional_modern_2.jpeg",
"traditional_modern_3.jpeg",
"traditional_modern_4.jpeg",
"traditional_modern_5.jpeg",
"traditional_modern_6.jpeg",
"traditional_modern_luxury.jpeg",
"traditional_modern_luxury_2.jpeg",
"traditional_modern_luxury_3.jpeg",
"traditional_modern_luxury_4.jpeg",
"traditional_modern_minimal_simple.jpeg",
"traditional_natural_rustic.jpeg",
"traditional_natural_simple_modern.jpeg",
"traditional_retro_natural_elegant.jpeg",
"traditional_retro_pop.jpeg",
"traditional_retro_rustic_handmade.jpeg",
"traditional_retro_simple_modern.jpeg",
"traditional_simple_elegant_rustic.jpeg",
"traditional_simple_minimal.jpeg",
"traditional_simple_minimal_2.jpeg",
"traditional_simple_modern_minimal.jpeg",
"warm_cute_pop_handmade.jpeg",
];

// キーワードの日本語⇔英語対応マップ
const keywordMap = {
    'luxury': '高級感',
    'elegant': 'エレガント',
    'modern': '現代的',
    'minimal': '洗練された',
    'natural': 'ナチュラル',
    'healthy': '健康的',
    'traditional': '和風',
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
        
        // すべてのターゲットボタンの選択を解除（売り場ボタンには影響させない）
        document.querySelectorAll('#targetGrid .target-btn').forEach(btn => {
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
    const productCategory = document.getElementById('productCategory').value || 'カテゴリ未入力';
    const productUnit = document.getElementById('productUnit').value || '販売単位未入力';
    const requiredLabels = document.getElementById('requiredLabels').value || 'なし';
    const referenceProducts = document.getElementById('referenceProducts').value || 'なし';
    const remarks = document.getElementById('remarks').value || 'なし';

    // 2. ターゲットの取得（グローバル変数selectedTargetを使用）
    const targetName = selectedTarget ? (targetMap[selectedTarget] || selectedTarget) : '未選択';

    // 3. 売り場の取得（グローバル変数selectedMarketsを使用）
    // 「その他」入力（marketOther）もあれば末尾に追加して反映する
    const marketOther = (document.getElementById('marketOther') && document.getElementById('marketOther').value) ? document.getElementById('marketOther').value.trim() : '';
    const marketText = (selectedMarkets && selectedMarkets.length > 0)
        ? (selectedMarkets.map(m => marketMap[m] || m).join(' / ') + (marketOther ? ' / ' + marketOther : ''))
        : (marketOther ? marketOther : '未選択');

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
        /* 余白を調整: 20mm は大きすぎるため縮小 */
        .container { max-width: 800px; margin: 0 auto; padding: 8mm; }
        /* 印刷時のページマージンも揃える */
        @page { margin: 8mm; }
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
            <h3>必須表示事項・デザイン制約</h3>
            <div class="sheet-text">${requiredLabels}</div>
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
            <h3>参考製品・備考</h3>
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
    const cs = document.getElementById('conceptSheet');
    if (cs && cs.classList) {
        cs.classList.remove('visible');
    }
    try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
        // スクロールが利用できない環境でも無視
    }
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
    document.getElementById('requiredLabels').value = '';
    document.getElementById('marketOther').value = '';
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

// --- Info modal handlers ---
document.addEventListener('DOMContentLoaded', function() {
    const infoBtn = document.getElementById('infoButton');
    const modal = document.getElementById('infoModal');
    const modalClose = document.getElementById('modalClose');

    if (!infoBtn || !modal) return;

    function openModal() {
        modal.removeAttribute('hidden');
        document.body.style.overflow = 'hidden';
        const focusable = modal.querySelector('[tabindex], button, a, input, textarea');
        if (focusable) focusable.focus();
    }

    function closeModal() {
        modal.setAttribute('hidden', '');
        document.body.style.overflow = '';
        infoBtn.focus();
    }

    infoBtn.addEventListener('click', openModal);
    modal.addEventListener('click', function(e) {
        if (e.target && e.target.getAttribute && e.target.getAttribute('data-close') === 'true') {
            closeModal();
        }
    });
    if (modalClose) modalClose.addEventListener('click', closeModal);
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
            closeModal();
        }
    });
});

// ==========================================
// サンプルデータ読み込み機能（画像選択対応版）
// ==========================================

const coffeeSampleData = {
    productName: "大地の恵み オーガニック・カフェ・ドリップ",
    productCategory: "ローストコーヒー（ドリップバッグ）",
    productUnit: "1パック（10g×5個入り）",
    requiredLabels: "有機JASマークの表示スペース確保、表面に『フェアトレード対象商品』の文言を記載すること。",
    target: "health", // 健康・美容（機能性・自然派）
    markets: ["premium", "direct"], // 百貨店・ギフト、直接販売・直売所
    marketOther: "オーガニック専門のセレクトショップ、自社オンラインショップ",
    keywords: ["natural", "healthy", "rustic"], // ナチュラル、健康的、素朴な
    referenceProducts: "〇〇珈琲の『クラフトシリーズ』。未晒しクラフト紙の風合いと、シンプルな植物モチーフのイラストが今回の理想に近いです。",
    remarks: "化学肥料不使用の優しいイメージを伝えたいので、あまりビビッドな色は使わず、アースカラー（ブラウンやベージュ、くすんだグリーン等）を基調にしてください。",
    // サンプルとして自動選択させる画像のファイル名（キーワードに合致するものから選定）
    images: [
        "handmade_rustic_elegant_healthy.jpeg",
        "handmade_warm_simple_natural.jpeg"
    ]
};

function loadCoffeeSample() {
    // すでに何かが入力されている場合は確認ダイアログを表示
    const getTrimmed = id => {
        const el = document.getElementById(id);
        return el && typeof el.value === 'string' ? el.value.trim() : '';
    };

    const hasInput = Boolean(
        getTrimmed('productName') ||
        getTrimmed('productCategory') ||
        getTrimmed('productUnit') ||
        getTrimmed('requiredLabels') ||
        getTrimmed('marketOther') ||
        getTrimmed('referenceProducts') ||
        getTrimmed('remarks') ||
        selectedTarget ||
        (selectedKeywords && selectedKeywords.length > 0) ||
        (selectedImages && selectedImages.length > 0)
    );

    if (hasInput) {
        const proceed = confirm('現在入力されている内容が上書きされます。サンプルデータを読み込みますか？');
        if (!proceed) return;
    }

    // 1. テキスト入力系の反映
    document.getElementById('productName').value = coffeeSampleData.productName;
    document.getElementById('productCategory').value = coffeeSampleData.productCategory;
    document.getElementById('productUnit').value = coffeeSampleData.productUnit;
    document.getElementById('requiredLabels').value = coffeeSampleData.requiredLabels;
    document.getElementById('marketOther').value = coffeeSampleData.marketOther;
    document.getElementById('referenceProducts').value = coffeeSampleData.referenceProducts;
    document.getElementById('remarks').value = coffeeSampleData.remarks;

    // 2. ターゲット属性の反映
    selectedTarget = coffeeSampleData.target;
    document.querySelectorAll('#targetGrid .target-btn').forEach(btn => {
        if (btn.dataset.target === coffeeSampleData.target) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // 3. 想定売り場の反映
    selectedMarkets = [...coffeeSampleData.markets];
    document.querySelectorAll('#marketGrid .target-btn').forEach(btn => {
        if (coffeeSampleData.markets.includes(btn.dataset.market)) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // 4. イメージキーワードの反映
    selectedKeywords = [...coffeeSampleData.keywords];
    document.querySelectorAll('#keywordsGrid .keyword-btn').forEach(btn => {
        if (coffeeSampleData.keywords.includes(btn.dataset.keyword)) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });

    // 5. キーワードに基づき画像グリッドを生成・表示
    updateImageGrid();

    // 6. 画像の選択状態の反映と同期
    // selectedImages は {url, order} の配列として管理するため同期してセットする
    selectedImages = [];

    // 生成されたDOM（画像カード）に対して選択クラスを付与し、selectedImages にオブジェクトを追加
    document.querySelectorAll('#imagesGrid .image-card').forEach(card => {
        const imgElement = card.querySelector('img');
        if (imgElement) {
            const srcPath = imgElement.getAttribute('src');
            const fileName = srcPath.substring(srcPath.lastIndexOf('/') + 1);

            if (coffeeSampleData.images.includes(fileName)) {
                card.classList.add('selected');
                // 選択配列に追加（順序は表示順）
                selectedImages.push({ url: srcPath, order: selectedImages.length + 1 });
            }
        }
    });

    // 選択枚数カウント（上部の表示）を更新
    updateSelectedCount();
}
// ==========================================
// JSON設定ファイルの書き出し（エクスポート）
// ==========================================
function exportToJSON() {
    // 1. 現在の入力・選択状態を1つのオブジェクトに集約
    const configData = {
        productName: document.getElementById('productName').value,
        productCategory: document.getElementById('productCategory').value,
        productUnit: document.getElementById('productUnit').value,
        requiredLabels: document.getElementById('requiredLabels').value,
        target: selectedTarget, // グローバル変数
        markets: selectedMarkets, // グローバル変数（配列）
        marketOther: document.getElementById('marketOther').value,
        keywords: selectedKeywords, // グローバル変数（配列）
        referenceProducts: document.getElementById('referenceProducts').value,
        remarks: document.getElementById('remarks').value,
        images: selectedImages.map(img => {
            const fileName = img.url.substring(img.url.lastIndexOf('/') + 1);
            return fileName;
        }) // file name array for portability
    };

    // 2. オブジェクトをJSON文字列に変換
    const jsonString = JSON.stringify(configData, null, 2); // インデント2で整形

    // 3. Blob（バイナリデータ）を作成してダウンロード
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    // 一時的なダウンロード用リンク要素を作ってクリックさせる
    const a = document.createElement("a");
    // ファイル名に今日の日付を付与（例: concept_setting_20260601.json）
    const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    a.href = url;
    a.download = `concept_setting_${today}.json`;
    
    document.body.appendChild(a);
    a.click();
    
    // 後片付け
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ==========================================
// JSON設定ファイルの読み込み（インポート）
// ==========================================
function importFromJSON(inputElement) {
    const file = inputElement.files[0];
    if (!file) return;

    // 事前の入力上書き確認
    const hasInput = document.getElementById('productName').value || selectedKeywords.length > 0;
    if (hasInput && !confirm('現在入力されている内容が上書きされます。ファイルを読み込みますか？')) {
        inputElement.value = ""; // 選択リセット
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            // 1. テキストをオブジェクトにパース
            const configData = JSON.parse(e.target.result);

            // 2. 各テキストフォームへの値の復元
            document.getElementById('productName').value = configData.productName || "";
            document.getElementById('productCategory').value = configData.productCategory || "";
            document.getElementById('productUnit').value = configData.productUnit || "";
            document.getElementById('requiredLabels').value = configData.requiredLabels || "";
            document.getElementById('marketOther').value = configData.marketOther || "";
            document.getElementById('referenceProducts').value = configData.referenceProducts || "";
            document.getElementById('remarks').value = configData.remarks || "";

            // 3. ターゲット属性のUI復元
            selectedTarget = configData.target || "";
            document.querySelectorAll('#targetGrid .target-btn').forEach(btn => {
                if (btn.dataset.target === selectedTarget) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });

            // 4. 想定売り場のUI復元
            selectedMarkets = Array.isArray(configData.markets) ? [...configData.markets] : [];
            document.querySelectorAll('#marketGrid .target-btn').forEach(btn => {
                if (selectedMarkets.includes(btn.dataset.market)) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });

            // 5. イメージキーワードのUI復元
            selectedKeywords = Array.isArray(configData.keywords) ? [...configData.keywords] : [];
            document.querySelectorAll('#keywordsGrid .keyword-btn').forEach(btn => {
                if (selectedKeywords.includes(btn.dataset.keyword)) {
                    btn.classList.add('selected');
                } else {
                    btn.classList.remove('selected');
                }
            });

            // 6. キーワードに連動する画像グリッドの再生成
            updateImageGrid();

            // 7. 画像の選択状態の復元
            const importedImageNames = Array.isArray(configData.images)
                ? configData.images.map(item => {
                    if (typeof item === 'string') return item;
                    if (item && typeof item.url === 'string') {
                        return item.url.substring(item.url.lastIndexOf('/') + 1);
                    }
                    return '';
                }).filter(Boolean)
                : [];

            selectedImages = [];
            document.querySelectorAll('#imagesGrid .image-card').forEach(card => {
                const imgElement = card.querySelector('img');
                if (imgElement) {
                    const srcPath = imgElement.getAttribute('src');
                    const fileName = srcPath.substring(srcPath.lastIndexOf('/') + 1);
                    if (importedImageNames.includes(fileName)) {
                        card.classList.add('selected');
                        selectedImages.push({ url: srcPath, order: selectedImages.length + 1 });
                    }
                }
            });

            // 選択枚数カウントの表示を更新
            updateSelectedCount();
            
            alert('設定ファイルを正しく読み込みました。');

        } catch (error) {
            console.error(error);
            alert('ファイルの解析に失敗しました。正しいJSONファイルか確認してください。');
        } finally {
            // 次回同じファイルを選択してもイベントが発火するように入力をクリア
            inputElement.value = "";
        }
    };

    // テキストとしてファイル読み込みを開始
    reader.readAsText(file);
}