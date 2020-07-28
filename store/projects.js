export const state = () => ({
    list: [],
    activeProject: null,
});

import data from '~/assets/js/data';

export const mutations = {
    set(state, list) {
        state.list = [...list];      
    },

    chooseActiveProject(state, project) {
        state.activeProject = project;
    },

    clearActiveProject(state) {
        state.activeProject = null;
    }
};

export const actions = {
    create({commit}, i18n) {
        const projects = data.projects.map(project => {
            const newProject = {...project};
            
            const {short, long, links, tech} = i18n.t(`projects['${project.name.toLowerCase()}']`);
            newProject.short = short;
            newProject.long = [...long];
            newProject.tech = [...tech];

            if(!newProject.links) {
                newProject.links = links;
            }
            return newProject;
        });
        commit('set', projects);
    }
};