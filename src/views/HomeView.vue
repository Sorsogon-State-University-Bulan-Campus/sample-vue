<script setup lang="ts">
import { reactive, ref } from 'vue';

type PostData = {
    userId: number
    id: number
    title: string
    body: string
}

const isLoading = ref(false)

const state = reactive({
    data: [] as PostData[],
    title: "",
    body: "",
    deleting: false
})

async function getPosts() {
    isLoading.value = true
    let url = "https://jsonplaceholder.typicode.com/posts"

    let res = await fetch(url)
    let actualData = await res.json()
    state.data = actualData

    isLoading.value = false;
}

getPosts()

function onSave() {
    // validation

    if(state.title && state.body) {
        // continue
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify({
                title: state.title,
                body: state.body,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log("output", res);
        })

    }
}

function onDelete(id: number) {
    state.deleting = true
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
    })
    .then((res) => {
        // success
        let postIndex = state.data.findIndex((item) => {
            return item.id == id
        })

        if(postIndex >= 0) {
            state.data.splice(postIndex, 1)
        }
        state.deleting = false
    })
    .catch((error) => {
        console.log("error", error)
    }); // error
}

</script>

<template>
    <p>Home</p>
    <h1>Create Post</h1>
    <div>
        <label for="">Title</label><br>
        <input v-model="state.title" type="text"><br>
        <label for="">Body</label><br>
        <textarea v-model="state.body" name="body" id=""></textarea><br>
        <button @click="onSave">Save</button>
    </div>
    <table>
        <thead>
            <tr>
                <th>User Id</th>
                <th>ID</th>
                <th>Title</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in state.data" :key="post.id">
                <td>{{ post.userId }}</td>
                <td>{{  post.id }}</td>
                <td>{{  post.title }}</td>
                <td>
                    <button v-if="!state.deleting" @click="onDelete(post.id)">Delete</button>
                    <span v-else>Loading ...</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>