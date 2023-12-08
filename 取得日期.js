// 取得具有 s_td class 的第一個元素
var sTdElement = document.querySelector('.s_td');

// 檢查是否成功取得元素
if (sTdElement) {
    // 取得日期的 <td> 元素
    var dateTdElement = sTdElement.querySelector('tr:nth-child(3) td:first-child');

    // 檢查是否成功取得日期元素
    if (dateTdElement) {
        // 獲取日期的文本內容
        var dateText = dateTdElement.textContent.trim();
        console.log('日期:', dateText);
    } else {
        console.log('找不到日期元素');
    }
} else {
    console.log('找不到具有 s_td class 的元素');
}
