export default function ({ app, store }) {
    app.i18n.onLanguageSwitched = () => {
        store.dispatch('projects/create', app.i18n);
    };
}