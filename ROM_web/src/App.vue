<script setup>

</script>

<template>
    <body>
        <div class="bg">
            <!-- 内层div元素作为粒子(particle)
        <div></div>
        <div></div>
        ... -->
        </div>
    </body>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    user-select: none;
    box-sizing: border-box;
}

html,
body {
    height: 100vh;
}
</style>

<style>
.bg {
    width: 100vw;
    height: 100vh;
    background: radial-gradient(#003010, #000000);
    overflow: hidden;
    position: relative;
}

.bg>div {
    position: absolute;
    border-radius: 50%;
}
</style>
