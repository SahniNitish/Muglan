const fs = require('fs');
const https = require('https');
const path = require('path');
const { menuData } = require('../data/menuData.ts');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images', 'menu');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download image
const downloadImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(path.join(imagesDir, filename));
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(path.join(imagesDir, filename), () => {}); // Delete file on error
            reject(err);
        });
    });
};

// Download all menu images
const downloadAllImages = async () => {
    console.log('Starting menu image downloads...');
    
    for (const category of menuData) {
        console.log(`\nDownloading images for category: ${category.category}`);
        
        for (const item of category.items) {
            try {
                const urlParts = item.image_url.split('/');
                const filename = urlParts[urlParts.length - 1];
                await downloadImage(item.image_url, filename);
                
                // Add a small delay to avoid overwhelming the server
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (error) {
                console.error(`Failed to download ${item.name}: ${error.message}`);
            }
        }
    }
    
    console.log('\nAll downloads completed!');
};

downloadAllImages().catch(console.error);