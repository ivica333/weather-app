<template>
 <div>
    <v-toolbar color="#2196F3" dark>
      <v-toolbar-title>Favorites</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-star</v-icon> 
    </v-toolbar>
    <!-- favorite list-->
    <v-list>
      <v-list-item v-for="item in favorites" :key="item">
        <v-list-item-content>
          <v-list-item-title @click="weatherInfo(item)" v-text="item"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
            <v-icon color="#D32F2F" @click="confirmBox = !confirmBox">mdi-delete</v-icon>
          </v-list-item-icon>

          <!----------confirm box------------>
  <div class="text-center">
    <v-dialog v-model="confirmBox" width="400">
      <v-card>
        <v-card-title class="headline red lighten-2" primary-title>
          Delete item
        </v-card-title>

        <v-card-text>
          Are you sure?
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" text @click="deleteFavoriteItem(item)">
            Delete
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="confirmBox = !confirmBox">
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>  
          <!------------confirm box-------------------->

      </v-list-item>
    </v-list>
  <!-- favorite list-->
</div>

</template>

<script>
import mixin from '../mixins';

export default {
  name: 'FavoritesList',

  data: () => ({
     favorites:[],
     confirmBox: false
  }),
  computed:{
    returnFav(){
       for (var i = 0; i < localStorage.length; i++){
           if(localStorage.getItem(localStorage.key(i)) !== "SILENT"){
              this.favorites.push(localStorage.getItem(localStorage.key(i)))
        }
       }
    }
  },
  created(){
    this.returnFav
  },
  methods:{
    deleteFavoriteItem(key){
       localStorage.removeItem(key)
       location.reload()
       this.dialog = true
    },
    openConfirmBox(){
      this.confimBox = true
    }
  },
  mixins:[mixin]
};
</script>
<style scoped>

</style>
