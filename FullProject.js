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

        // 將民國年轉換為西元年
        var rocYear = parseInt(dateText.split('.')[0], 10) + 1911;
        var formattedDate = rocYear + '/' + dateText.substring(dateText.indexOf('.') + 1).replace(/\./g, '/');

        // 檢查是否需要修改 rtxt_todayroc 的 value
        var rtxtTodayRocElement = document.querySelector('#rtxt_todayroc');
        if (rtxtTodayRocElement) {
            var rtxtTodayRocValue = rtxtTodayRocElement.value;
            var formattedRocValue = rtxtTodayRocValue.replace(/\./g, '');
            if (dateText !== formattedRocValue) {
                rtxtTodayRocElement.value = formattedRocValue;
                console.log('修改 rtxt_todayroc 的 value:', formattedRocValue);
            }
        }

        // 檢查是否需要修改 rtxt_today 的 value
        var rtxtTodayElement = document.querySelector('#rtxt_today');
        if (rtxtTodayElement) {
            var rtxtTodayValue = rtxtTodayElement.value;
            var formattedDateWithSlash = formattedDate.replace(/(\d{4})(\d{2})(\d{2})/, '$1/$2/$3');
            if (formattedDateWithSlash !== rtxtTodayValue) {
                rtxtTodayElement.value = formattedDateWithSlash;
                console.log('修改 rtxt_today 的 value:', formattedDateWithSlash);
            }
        }
    } else {
        console.log('找不到日期元素');
    }
} else {
    console.log('找不到具有 s_td class 的元素');
}
