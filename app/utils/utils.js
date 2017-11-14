class Utils {
    static plainText(inputText) {
        var text = "" + inputText;

        text=text.replace(/&nbsp;/gi," ");
        text=text.replace(/&amp;/gi,"&");
        text=text.replace(/&quot;/gi,'"');
        text=text.replace(/&lt;/gi,'<');
        text=text.replace(/&gt;/gi,'>');
        text=text.replace(/&#39;/gi,'\'');

        return text;
    }

}
export default Utils
