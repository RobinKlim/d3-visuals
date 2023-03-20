import HelloWorld from '../components/HelloWorld.vue';

export default {
    title: 'HelloWorld',
    // component: HelloWorld,
};

export const Primary = () => ({
    components: { HelloWorld },
    template: '<HelloWorld/>',
});

export const Secondary = () => ({
    components: { HelloWorld },
    template: '<HelloWorld/>',
});