<template>
  <el-form ref="form" :rules="rules" :model="formList" label-width="80px">
    <el-form-item label="商品名称" prop="name">
      <el-input v-model="formList.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-upload
        class="upload-demo"
        action="http://localhost:7085/upload/upload"
        :on-success="handleSuccess"
        :on-remove="handleRemove"
        :file-list="formList.fileList"
        name="goods"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
    <el-form-item label="商品价格" prop="price">
      <el-input v-model="formList.price"></el-input>
    </el-form-item>
    <el-form-item label="入库时间" prop="date">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="formList.date" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="是否上架">
      <el-switch v-model="formList.isShow"></el-switch>
    </el-form-item>
    <el-form-item label="">
      <el-button type="default" @click="cancel('form')">取消</el-button>
      <el-button type="primary" @click="add('form')">新增</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { addGood } from '@/api/products'
export default {
  data () {
    return {
      formList: {
        fileList: [],
        name: '',
        price: '',
        date: '',
        isShow: false
      },
      rules: {
        name: [
          { required: true, message: '请输入商品名称', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入商品价格', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '请输入时间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    cancel (formName) {
      this.$refs[formName].resetFields()
    },
    add (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addGood(this.formList).then(res => {
            this.$message.info('新增成功')
            this.$refs[formName].resetFields()
          })
        } else {
          return false;
        }
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleSuccess(response, file, fileList) {
      this.formList.fileList.push({
        name: response.data.originalname,
        path: response.data.path
      })
    }
  }
}
</script>

