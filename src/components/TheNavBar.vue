<!-- NavBar.vue -->
<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">地图</RouterLink>
            </li>
            <li>
                <RouterLink to="/about">关于本项目</RouterLink>
            </li>

        </ul>
    </nav>
</template>

<script setup>
</script>

<style scoped>
nav {
    display: flex;
    background-color: #3e3e81;
    color: white;
    padding: 3rem;
    height: 60px;
    position: sticky;
    align-items: center;
    overflow: inherit;
}

ul {

    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
}

li {
    margin-right: 2rem;
    font-size: 30px;
}

a {
    color: white;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>