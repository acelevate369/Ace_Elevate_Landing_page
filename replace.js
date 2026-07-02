const fs = require('fs');
const path = require('path');

const projectDir = 'c:\\Users\\MyBook Hype\\Documents\\BRAND KIT ACE PROJECT\\Salinan dari Ace Zenith\\Ace Elevate\\landing_page_AceElevate\\ace-elevate';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (dirPath.includes('node_modules') || dirPath.includes('.git')) return;
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir(projectDir, function(filePath) {
    if (filePath.endsWith('.html') || filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content;
        
        // Before replacing all WhatsApp, let's temporarily hide the new FAQ
        const faqMarker = '%%FAQ_PROTECTED%%';
        const newFaqStr = `        {
          "@type": "Question",
          "name": "Why did you switch from WhatsApp to Telegram?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We moved to Telegram due to WhatsApp's restrictions on running text-based Generative AI functions. Telegram provides the flexibility we need to deliver our advanced AI agents. In the future, we will research other chat apps we can utilize."
          }
        }`;
        
        let faqPresent = content.includes(newFaqStr);
        if (faqPresent) {
            newContent = newContent.replace(newFaqStr, faqMarker);
        } else {
             // Let's also check for exact text just in case spacing is different
             const newFaqQ = 'Why did you switch from WhatsApp to Telegram?';
             const newFaqA = "We moved to Telegram due to WhatsApp's restrictions on running text-based Generative AI functions. Telegram provides the flexibility we need to deliver our advanced AI agents. In the future, we will research other chat apps we can utilize.";
             if(content.includes(newFaqQ)) {
                 newContent = newContent.replace(newFaqQ, '%%FAQ_Q_PROTECTED%%');
             }
             if(content.includes(newFaqA)) {
                 newContent = newContent.replace(newFaqA, '%%FAQ_A_PROTECTED%%');
             }
        }

        // Apply grammar fixes first
        newContent = newContent
            .replace(/WhatsApp and Telegram, apps/gi, 'Telegram, an app')
            .replace(/WhatsApp & Telegram, platforms/gi, 'Telegram, a platform')
            .replace(/WhatsApp and Telegram/gi, 'Telegram')
            .replace(/WhatsApp & Telegram/gi, 'Telegram')
            .replace(/WhatsApp, Telegram/gi, 'Telegram')
            .replace(/<span className="text-\\[#C48B68\\] font-medium">WhatsApp<\\/span> & <span className="text-\\[#C48B68\\] font-medium">Telegram<\\/span>/g, '<span className="text-[#C48B68] font-medium">Telegram</span>');
            
        // Now generic replacements
        newContent = newContent
            .replace(/WhatsApp/g, 'Telegram')
            .replace(/whatsapp/g, 'telegram')
            .replace(/wa\.me/g, 't.me');

        // Restore the FAQ
        if (faqPresent) {
            newContent = newContent.replace(faqMarker, newFaqStr);
        } else {
            newContent = newContent.replace('%%FAQ_Q_PROTECTED%%', 'Why did you switch from WhatsApp to Telegram?');
            newContent = newContent.replace('%%FAQ_A_PROTECTED%%', "We moved to Telegram due to WhatsApp's restrictions on running text-based Generative AI functions. Telegram provides the flexibility we need to deliver our advanced AI agents. In the future, we will research other chat apps we can utilize.");
        }

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated: ', filePath);
        }
    }
});
