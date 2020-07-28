<template>
    <div class="container">
        <main>
            <section id="about">
                <div class="about-content">
                    <h3>{{ $t('about.p1') }}</h3>
                    <p>{{ $t('about.p2') }}</p>
                    <p>{{ $t('about.p3') }}</p>
                </div>
            </section>
            <section id="portfolio">
                <h2>
                    {{ $t('headers.portfolio') }}
                </h2>
                <div class="about-content">
                    Vivamus rutrum, ipsum sodales laoreet finibus, ipsum neque pellentesque ex, et tempor ipsum ligula eget elit. Phasellus ultricies diam non faucibus auctor. Pellentesque id neque at libero ullamcorper efficitur. Nam mi libero, pulvinar vitae odio a, cursus interdum lectus. Fusce eu placerat turpis. Sed sagittis, dolor et pharetra tincidunt, turpis lacus tristique nunc, sed pellentesque metus lorem a orci. Duis suscipit quis nulla sit amet posuere. Integer ut tempor felis.
                </div>
            </section>
            <section id="skills">
                <h2>
                    {{ $t('headers.skills') }}
                </h2>
                <div class="about-content">
                    Vivamus rutrum, ipsum sodales laoreet finibus, ipsum neque pellentesque ex, et tempor ipsum ligula eget elit. Phasellus ultricies diam non faucibus auctor. Pellentesque id neque at libero ullamcorper efficitur. Nam mi libero, pulvinar vitae odio a, cursus interdum lectus. Fusce eu placerat turpis. Sed sagittis, dolor et pharetra tincidunt, turpis lacus tristique nunc, sed pellentesque metus lorem a orci. Duis suscipit quis nulla sit amet posuere. Integer ut tempor felis.
                </div>
            </section>
            <section id="posts">
                <h2>
                    {{ $t('headers.posts') }}
                </h2>
                <div class="about-content">
                    Vivamus rutrum, ipsum sodales laoreet finibus, ipsum neque pellentesque ex, et tempor ipsum ligula eget elit. Phasellus ultricies diam non faucibus auctor. Pellentesque id neque at libero ullamcorper efficitur. Nam mi libero, pulvinar vitae odio a, cursus interdum lectus. Fusce eu placerat turpis. Sed sagittis, dolor et pharetra tincidunt, turpis lacus tristique nunc, sed pellentesque metus lorem a orci. Duis suscipit quis nulla sit amet posuere. Integer ut tempor felis.
                </div>
            </section>
            <section id="contacts">
                <h2>
                    {{ $t('headers.contacts') }}
                </h2>
                <div class="about-content">
                    Vivamus rutrum, ipsum sodales laoreet finibus, ipsum neque pellentesque ex, et tempor ipsum ligula eget elit. Phasellus ultricies diam non faucibus auctor. Pellentesque id neque at libero ullamcorper efficitur. Nam mi libero, pulvinar vitae odio a, cursus interdum lectus. Fusce eu placerat turpis. Sed sagittis, dolor et pharetra tincidunt, turpis lacus tristique nunc, sed pellentesque metus lorem a orci. Duis suscipit quis nulla sit amet posuere. Integer ut tempor felis.
                </div>
            </section>
        </main>
    </div>
</template>

<script>
export default {};
</script>

<style>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}
</style>
