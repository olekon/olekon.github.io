export default function ({ app, store }) {
    app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
        console.log(oldLocale, newLocale);
        store.dispatch('projects/create', app.i18n);
    };
}