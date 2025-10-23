document.addEventListener('DOMContentLoaded', function() {
    // --- 1. DADOS DO CONTATO (Maximo Beal de Souza) ---
    // Estes dados são usados para gerar o QR Code
    const vcard_begin = 'BEGIN:VCARD\\nVERSION:3.0\\n';
    const nome = 'FN:Maximo Beal de Souza\\n';
    const tel = 'TEL;TYPE=CELL:+5546999999991\\n';
    const email = 'EMAIL:salesioninja@gmail.com\\n';
    const site = 'URL;TYPE=Site:https://acessaronline.com.br\\n';
    const instagram = 'URL;TYPE=Instagram:https://instagram.com/professor.salesio\\n';
    const youtube = 'URL;TYPE=YouTube:https://youtube.com/@salesioninja\\n';
    const tiktok = 'URL;TYPE=TikTok:https://tiktok.com/@salesio_ninja\\n';
    const vcard_end = 'END:VCARD';

    // O "\\n" representa a quebra de linha exigida pelo formato VCF.
    const vcard = vcard_begin + 
                  nome + 
                  tel + 
                  email + 
                  site + 
                  instagram +
                  youtube +
                  tiktok +
                  vcard_end;

    // --- 2. GERA O QR CODE DINAMICAMENTE ---
    // Usa a biblioteca qrcode.js com jQuery
    if (typeof jQuery !== 'undefined' && jQuery.fn.qrcode) {
         jQuery('#qrcode').qrcode({
            width: 200,
            height: 200,
            text: vcard,
            fill: '#1e293b' // Cor de preenchimento
        });
    } else {
        console.error("As bibliotecas necessárias (jQuery ou qrcode.js) não estão carregadas.");
    }
});