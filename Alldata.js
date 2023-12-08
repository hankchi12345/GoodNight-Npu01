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

// 取得具有 id 為 rtxt_todayroc 的 <input> 元素
var rtxtTodayRocElement = document.querySelector('#rtxt_todayroc');

// 檢查是否成功取得元素
if (rtxtTodayRocElement) {
    // 獲取 rtxt_todayroc 元素的 value 屬性
    var rtxtTodayRocValue = rtxtTodayRocElement.value;
    console.log('rtxt_todayroc 的 value:', rtxtTodayRocValue);
} else {
    console.log('找不到具有 id 為 rtxt_todayroc 的元素');
}

// 取得具有 id 為 rtxt_today 的 <input> 元素
var rtxtTodayElement = document.querySelector('#rtxt_today');

// 檢查是否成功取得元素
if (rtxtTodayElement) {
    // 獲取 rtxt_today 元素的 value 屬性
    var rtxtTodayValue = rtxtTodayElement.value;
    console.log('rtxt_today 的 value:', rtxtTodayValue);
} else {
    console.log('找不到具有 id 為 rtxt_today 的元素');
}
