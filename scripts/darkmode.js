const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    const styles = getComputedStyle(document.documentElement);
    const bgColor = styles.getPropertyValue('--bg-color');
    if (bgColor == '#f9fcff') {
        document.documentElement.style.setProperty('--bg-color', '#23272a');
        document.documentElement.style.setProperty('--bg-lighter', '#222224');
        document.documentElement.style.setProperty('--bg-lighter-lighter', '#2c2f33');
        document.documentElement.style.setProperty('--bg-font', '#dddddd')
    } else {
        document.documentElement.style.setProperty('--bg-color', '#f9fcff');
        document.documentElement.style.setProperty('--bg-lighter', '#dddddd');
        document.documentElement.style.setProperty('--bg-lighter-lighter', '#efefef');
        document.documentElement.style.setProperty('--bg-font', '#2c2f33')
    }
});
