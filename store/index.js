export const state = () => ({

});

export const actions = {
    nuxtServerInit ({ dispatch }, {app}) {        
        dispatch('projects/create', app.i18n);
    }
};