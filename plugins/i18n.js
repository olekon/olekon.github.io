export default function ({ app, store }) {
    app.i18n.onLanguageSwitched = () => {
        app.$scrollTrigger.refresh();
        store.dispatch('projects/create', app.i18n);
    };
}