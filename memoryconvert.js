<script language="JavaScript">
<!--
function byteConverter(){
document.converter.kb.value = document.converter.byte.value / 1024
document.converter.mb.value = document.converter.byte.value / (1024*1024)
document.converter.gb.value = document.converter.byte.value / (1024*1024*1024)
}

function kbConverter(){
document.converter.byte.value = document.converter.kb.value * 1024
document.converter.mb.value = document.converter.kb.value / 1024
document.converter.gb.value = document.converter.kb.value / (1024*1024)
}

function mbConverter(){
document.converter.byte.value = document.converter.mb.value * 1024 * 1024
document.converter.kb.value = document.converter.mb.value * 1024
document.converter.gb.value = document.converter.mb.value / 1024
}
function gbConverter(){
document.converter.byte.value = document.converter.gb.value * 1024 * 1024 * 1024
document.converter.kb.value = document.converter.gb.value * 1024 * 1024
document.converter.mb.value = document.converter.gb.value * 1024
}
//-->
</script>

<form name="converter">
	Byte: <input type="text" name="byte" onChange="byteConverter()" /><br />
	KB: <input type="text" name="kb" onChange="kbConverter()" /><br />
	MB: <input type="text" name="mb" onChange="mbConverter()" /><br />
	GB: <input type="text" name="gb" onChange="gbConverter()" /><br />
    <input type="button" value="Convert!" />
</form>