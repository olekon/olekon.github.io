import data from '~/assets/js/data';

export const state = () => ({
    list: [],
    filters: [],
    activeFilter: null,
    activeProject: null,
});

export const getters = {
    filteredProjects: ({list, activeFilter}) => 
        activeFilter ? 
            list.filter(({keywords}) => keywords.indexOf(activeFilter.name) !== -1) : 
            list,
};

export const mutations = {
    setProjects(state, list) {
        state.list = [...list];      
    },

    setFilters(state, filters) {
        state.filters = [...filters];      
    },

    chooseActiveProject(state, project) {
        state.activeProject = project;
    },

    clearActiveProject(state) {
        state.activeProject = null;
    },

    chooseFilter(state, filter) {
        state.activeFilter = filter;
    },

    clearFilter(state) {
        state.activeFilter = null;
    }
};

export const actions = {
    create({commit}, i18n) {
        const projects = data.projects.filter(({hide}) => !hide).map(project => {
            const newProject = {...project};
            
            const {short, long, links, tech, displayName} = i18n.t(`projects['${project.name.toLowerCase()}']`);
            newProject.short = short;
            newProject.long = [...long];
            newProject.tech = [...tech];
            newProject.displayName = displayName || newProject.name;
            if(!newProject.links) {
                newProject.links = links;
            }
            return newProject;
        });

        projects.sort((a, b) => b.weight - a.weight);
        commit('setProjects', projects);

        const filters = Object.entries(data.keywords)
            .filter(entry => entry[1].filter && !entry[1].hide)
            .map(entry => ({
                name: entry[0],
                image: entry[1].image
            }));
        commit('setFilters', filters);
    }
};