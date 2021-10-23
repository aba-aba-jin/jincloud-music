

<template>
    <div id="app">
        <router-view class="JIN-router-view" v-slot="{ Component }">
            <transition :name="transitionName">
                <component :is="Component" />
            </transition>
        </router-view>
        <tab-bar v-if="tabBarVisible" />
    </div>
</template>

<script>
    import { reactive, toRefs } from 'vue'
    import { useRouter } from 'vue-router'
    import TabBar from '@/components/TabBar.vue';
    export default {
        components: {
            TabBar
        },
    setup() {
        const router = useRouter()
        const state = reactive({
            transitionName: 'slide-left',
            tabBarVisible: true,
        })
        router.beforeEach((to, from) => {
            console.log(to, from)
           state.tabBarVisible = to.meta.hasTabBar;
            if (to.meta.index > from.meta.index) {
            state.transitionName = 'slide-left' // 向左滑动
            } else if (to.meta.index < from.meta.index) {
            // 由次级到主级
            state.transitionName = 'slide-right'
            } else {
            state.transitionName = ''   // 同级无过渡效果
            }
        })

        return {
            ...toRefs(state)
        }
        }
    }
</script>

<style>
#app {
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: linear-gradient(#eee9ed, #ffffff 50%, #ffffff 100%);
    font-size: 16px;
    position: relative;
}

.JIN-router-view{
    -webkit-overflow-scrolling: touch;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active{
    height: 100%;
    will-change: transform;
    transition: all 500ms;
    position: absolute;
    backface-visibility: hidden;
}
.slide-right-enter{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter{
    opacity: 0;
    transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active{
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
    z-index: 1000;
}
</style>
