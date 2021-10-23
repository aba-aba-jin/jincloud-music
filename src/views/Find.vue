<template>
    <div class="JIN-find-container">
        <s-header>
            <div class="JIN-find-search"> 
               <img :src="state.searchIcon" alt="">
               {{ state.placeholder }}
            </div>
            <img alt='' :src='state.discernIcon' class="JIN-discern" />
        </s-header>
        <FindSwiper :images="state.images" />
        <!-- <SongSheet :title="'aa'" /> -->
    </div>
</template>

<script>
    import FindSwiper from '@/components/FindSwiper';
    // import SongSheet from '@/components/SongSheet';
    import sHeader from '@/components/SimpleHeader';
    import discernIcon from '@assets/discern.png';
    import searchIcon from '@assets/search.png';
    import { reactive } from 'vue';

    export default {
        components:{
            FindSwiper,
            sHeader,
            // SongSheet
        },
        
        setup() {
            const state = reactive({
                discernIcon,
                searchIcon,
                serchValue: '',
                placeholder: '请输入搜索关键词',
                images: [
                    'http://p1.music.126.net/QyfU5dMC7raGnIOaGmnmoQ==/109951166522205428.jpg?imageView&quality=89',
                    'http://p1.music.126.net/xR_1_Wbuclu9htD2RyXqTg==/109951166525598486.jpg?imageView&quality=89',
                ]
            })

            return {
                state,
            }
        }
    }
</script>

<style lang='less'>
    .JIN-find-container {
        
    }
    .JIN-find-search {
        flex: 1;
        height: 106 / @rem;
        line-height: 105 / @rem;
        background: #ffffff;
        margin: 50 / @rem 24 / @rem;
        display: flex;
        align-items: center;
        font-size: 32 / @rem;
        color: #979797 ;
        border-radius: 106 / @rem;
       img {
            height: 54 / @rem;
       }
    }
    .JIN-discern {
        height: 54 / @rem;
    }

    
    
</style>