// 获取文本元素和输出文本框
const textToSelect = document.getElementById("textToSelect");
const output = document.getElementById("output");

// 监听选择变化事件（selectionchange）
document.addEventListener("selectionchange", function() {
    const selectedText = window.getSelection().toString();

    // 如果有选择的文本，将其显示在文本框中
    if (selectedText) {
        output.value = selectedText;
    } else {
        output.value = ""; // 如果没有选择文本，清空文本框
    }
});
