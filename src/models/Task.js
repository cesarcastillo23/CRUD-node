const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({

  title:{
    type:String,
    require:true,
    unique:true,
    //para eliminar espacios
    trim:true
  },
  descripcion:{
    type:String,
    require:true
  },
  done:{
    type:Boolean,
    default :false
  }
},{
  timestamps:true,
  //eliminar el :_v de la base de datos
  versionKey:false
})

module.exports=mongoose.model('Task',taskSchema);