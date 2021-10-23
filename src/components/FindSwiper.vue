<template>
    <van-swipe :autoplay="5000" class="JIN-find-swipe" ref="swipeRef" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
            <img :src="image" />
        </van-swipe-item>
            <template #indicator="{ active }">
                <div class="JIN-custom-indicator">
                <div 
                    @click='handleImage(index)' 
                    v-for="(image, index) in images" 
                    :key="image" 
                    :class="index === active ? 'JIN-active-dot' : ''"
                />
                </div>
            
        </template>
    </van-swipe>
</template>

<script>
import { ref } from 'vue';

export default {
    
    components:{
       
    },

    props: {
        images: Array[String]
    },

    setup() {
        const swipeRef = ref(null)
        const handleImage = (key) => {
            swipeRef.value.swipeTo(key)
            // this.$refs.swipeRef.swipeTo(key);
        }

        return {
            handleImage
        }
    }
}
</script>

<style lang="less" scoped>
    .JIN-find-swipe {
        margin: @padding;
        border-radius: 25 / @rem;
        
        .van-swipe-item {
            width: 100%;
            height: 382 / @rem;
            border-radius: 46 / @rem 52 / @rem;
            img {
                max-width: 100%;
            }
        }

        .JIN-custom-indicator {
            left: 50%;
            transform: translateX(-50%);
            position: absolute;
            bottom: 18 / @rem;
            display: flex;
            div {
                width: 24 / @rem;
                height: 6 / @rem;
                margin: 0 12 / @rem;
                background: rgba(214,212,215, 0.4);
            }

            .JIN-active-dot {
                background: rgba(255, 255, 255, 0.9);
            }
        }
    }
</style>
