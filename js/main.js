const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            linkImg: "https://f1grandprix.motorionline.com/wp-content/uploads/2024/05/livree-ferrari-gp-miami-2024-1024x691.jpg"
        }
    }
}).mount('#app')