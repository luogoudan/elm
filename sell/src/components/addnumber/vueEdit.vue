<template>
  <div>
    <div class="wbjj">
    <quill-editor
      v-model="content"
      
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    >
    </quill-editor>
    <div class="tjjs">
      <el-button type="primary">提交</el-button>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "<h2>I am Example</h2>",
      editorOption: {
        // some quill options
      }
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  }
};
</script>
<style >
.wbjj {
  margin-top: 20px;
  margin-left: 5%;
  width: 90%;
  display: inline-block;
}
.tjjs {
  margin-top: 30px;
  margin-left: 45%;
}
.ql-editor{
  height: 500px;
}
</style>