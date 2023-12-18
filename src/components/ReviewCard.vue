<template>
    <div class="card">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
        </div>
    </div>
</template>
<script>
export default {
    name: "ReviewCardComponent",
    props: {
        personName: String,
        profileImageUrl: String,
        reviewMessage: String
    }
}
</script>
<style>
.card {
    transform: rotateX(40deg);
    box-shadow: 0 20px 10px 2px rgba(0,0,0,0.8);
    filter: blur(2px);
    transition: 0.4s;
    margin-inline: 4%;
}
.card:hover {
    filter: blur(0px);
    transform: rotateX(0deg);
    box-shadow: 0 0px 5px 2px rgba(0,0,0,0.3);
}
</style>