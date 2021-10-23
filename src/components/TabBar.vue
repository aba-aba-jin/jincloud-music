<template>
    <div class="JIN-nav-bar">
        <div 
            v-for="item in state.navConfig"
            :key="item.key"
            class="JIN-nav-item"
            @click="onClickIcon(item.key)"
        >
            <div :class="state.activeKey === item.key ? 'JIN-nav-icon JIN-active-nav-icon' : 'JIN-nav-icon'">
                <img alt='' :src="state.activeKey === item.key  ? item.activeIcon : item.icon" />
            </div>
            {{ item.text }}
        </div>
    </div>
</template>

<script>
import { reactive } from 'vue';
import findIcon from '@assets/find.png';
import findGreyIcon from '@assets/find-grey.png';
import microIcon from '@assets/micro.png';
import microGreyIcon from '@assets/micro-grey.png';
import musicIcon from '@assets/music.png';
import musicGreyIcon from '@assets/music-grey.png';
import podcastIcon from '@assets/podcast.png';
import podcastGreyIcon from '@assets/podcast-grey.png';
import usersIcon from '@assets/users.png';
import usersGreyIcon from '@assets/users-grey.png';
export default {
    setup(){
        const state = reactive({
            activeKey: 'find',
            navConfig: [
                {
                    key: 'find',
                    text: '发现',
                    icon: findGreyIcon,
                    activeIcon: findIcon
                },
                 {
                    key: 'podcast',
                    text: '播客',
                    icon: podcastGreyIcon,
                    activeIcon: podcastIcon
                },
                {
                    key: 'me',
                    text: '我的',
                    icon: musicGreyIcon,
                    activeIcon: musicIcon
                },
                 {
                    key: 'micro',
                    text: 'K歌',
                    icon: microGreyIcon,
                    activeIcon: microIcon
                },
                 {
                    key: 'users',
                    text: '云村',
                    icon: usersGreyIcon,
                    activeIcon: usersIcon
                },
            ]
            })
        const onClickIcon = (type) => {
            state.activeKey = type
        }
        return {
            state,
            onClickIcon,
        }
    }
  
}
</script>

<style scoped lang='less'>
    .JIN-nav-bar {
        position: fixed;
        bottom: 0;
        height: 148 / @rem; // 148
        width: 100%;
        display: flex;
        justify-content: space-around;

         .JIN-nav-item {
            padding: 22 / @rem 0;
            font-size: 14 / @rem;
            line-height: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            img {
                width: 100%;
                max-width: 100%;
                
            }
        }
    }

   

    .JIN-nav-icon {
        padding: 20 / @rem;
        width: 84 / @rem;
        height: 84 / @rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50% !important;
    }

    .JIN-active-nav-icon {
        background: #fe3b39;
    }

</style>