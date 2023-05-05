function criptografar() {
  var str = document.getElementById("inputTexto").value
  var cipher = []
  for (var i = 0; i < str.length; i++) {
    cipher[i] = str.charCodeAt(i) + 3
  }
  document.getElementById("mensagem").value = String.fromCharCode.apply(
    null,
    cipher
  )
  document.getElementById("btn-copiar").disabled = false
  document.getElementById("btn-limpar").disabled = false
}

function descriptografar() {
  var str = document.getElementById("mensagem").value
  var cipher = []
  for (var i = 0; i < str.length; i++) {
    cipher[i] = str.charCodeAt(i) - 3
  }
  document.getElementById("inputTexto").value = String.fromCharCode.apply(
    null,
    cipher
  )
  document.getElementById("btn-copiar").disabled = false
  document.getElementById("btn-limpar").disabled = false
}

function copiar() {
  var copyText = document.getElementById("mensagem")
  copyText.select()
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy")
  alert("Texto copiado para a área de transferência!")
}

function limpar() {
  document.getElementById("inputTexto").value = ""
  document.getElementById("mensagem").value = ""
  document.getElementById("btn-copiar").disabled = true
  document.getElementById("btn-limpar").disabled = true
}
