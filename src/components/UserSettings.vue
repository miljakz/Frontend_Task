<template>
  <div class="user-settings">
    <h1>User Settings</h1>
    <form @submit.prevent="updateUserSettings">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="user.username" />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    };
  },
  created() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      // Assuming fetchUser is an action in Vuex that fetches the user data from the backend
      this.$store.dispatch('fetchUser')
        .then(response => {
          this.user = response.data; // Populate the user data into form fields
        })
        .catch(error => {
          console.error("Failed to fetch user data:", error);
        });
    },
    updateUserSettings() {
      // Assuming updateUser is an action in Vuex that updates the user data
      this.$store.dispatch('updateUser', this.user)
        .then(() => {
          alert('User settings updated successfully.');
        })
        .catch(error => {
          console.error("Failed to update user settings:", error);
        });
    }
  }
}
</script>

<style scoped>
.user-settings {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.user-settings form div {
  margin-bottom: 20px;
}
label {
  margin-right: 10px;
}
input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
