document.addEventListener('DOMContentLoaded', function () {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.innerText = '复制';
        button.style.marginLeft = '10px';
        button.onclick = function () {
            const code = block.innerText;
            navigator.clipboard.writeText(code).then(() => {
                alert('代码已复制！');
            }).catch(err => {
                console.error('复制失败', err);
            });
        };
        block.parentNode.insertBefore(button, block.nextSibling);
    });
});
