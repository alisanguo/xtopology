<template>
  <div>
    <!-- 选中为空 -->
    <div v-if="!props.node && !props.line && !props.multi">
      <div class="title">欢迎使用le5le-topology！</div>
      <div class="group">
        <a
          class="star"
          href="https://github.com/le5le-com/topology"
          target="_blank"
          >喜欢，点击这里打个star吧</a
        >
        <a href="https://www.yuque.com/alsmile/topology" target="_blank"
          >使用教程</a
        >
        <br />
        <a
          href="http://topology.le5le.com/assets/img/topology_wechat.jpg?t=1"
          target="_blank"
          >微信交流群（大群）</a
        >
        <br />
        <a
          href="http://topology.le5le.com/assets/img/topology_wechat2.jpg"
          target="_blank"
          >微信交流群2</a
        >
        <br />
        <a
          href="https://www.yuque.com/alsmile/topology/faq#EVbCgt"
          target="_blank"
          >联系我们</a
        >
      </div>
      <div class="title">[Todo] 未来规划</div>
      <ul class="group">
        <li>Github issues</li>
        <li>React demo</li>
        <li>Vue3 demo</li>
        <li>系列教程</li>
      </ul>
      <div class="bottom">
        <div class="title">小提示</div>
        <ul class="group">
          <li>方向键：控制节点移动5个像素</li>
          <li>Ctrl + 方向键：控制节点移动1个像素</li>
          <li>Ctrl + 鼠标移动：移动整个画布</li>
          <li>Ctrl + 鼠标滚轮：缩放</li>
          <li>添加或选中节点，右侧属性支持上传各种图片哦</li>
        </ul>
      </div>
    </div>
    <!-- 选中节点 -->
    <div v-if="props.node">
      <div class="title">位置和大小</div>
      <div class="items">
        <div class="flex grid">
          <div>X（px）</div>
          <div class="ml5">Y（px）</div>
        </div>
        <div class="flex grid">
          <div>
            <el-input-number
              v-model="props.node.rect.x"
              controls-position="right"
              @change="onChange"
            ></el-input-number>
          </div>
          <div class="ml5">
            <el-input-number
              v-model="props.node.rect.y"
              controls-position="right"
              @change="onChange"
            ></el-input-number>
          </div>
        </div>
      </div>
      <div class="items">
        <div class="flex grid">
          <div>宽（px）</div>
          <div class="ml5">高（px）</div>
        </div>
        <div class="flex grid">
          <div>
            <el-input-number
              v-model="props.node.rect.width"
              controls-position="right"
              @change="onChange"
            ></el-input-number>
          </div>
          <div class="ml5">
            <el-input-number
              v-model="props.node.rect.height"
              controls-position="right"
              @change="onChange"
            ></el-input-number>
          </div>
        </div>
      </div>
      <div class="items" v-if="props.node.is3D">
        <div class="flex grid">
          <div>Z（px）</div>
        </div>
        <div class="flex grid">
          <div>
            <el-input-number
              v-model="props.node.z"
              controls-position="right"
              @change="onChange"
            ></el-input-number>
          </div>
        </div>
      </div>
      <div class="items">
        <div class="flex grid">
          <div title="百分比%对应的小数值">圆角（0 - 1）</div>
          <div class="ml5">旋转（°）</div>
        </div>
        <div class="flex grid">
          <div>
            <el-input-number
              v-model="props.node.borderRadius"
              controls-position="right"
              @change="onChange"
              :min="0"
              :max="1"
              :step="0.1"
            ></el-input-number>
          </div>
          <div class="ml5">
            <el-input-number
              v-model="props.node.rotate"
              controls-position="right"
              @change="onChange"
            ></el-input-number>
          </div>
        </div>
      </div>
      <div class="items">
        <div class="flex grid">
          <div title="padding-left">内边距-左</div>
          <div title="padding-right" class="ml5">内边距-右</div>
        </div>
        <div class="flex grid">
          <div>
            <el-input
              size="small"
              v-model="props.node.paddingLeft"
              controls-position="right"
              @change="onChange"
            ></el-input>
          </div>
          <div class="ml5">
            <el-input
              size="small"
              v-model="props.node.paddingRight"
              controls-position="right"
              @change="onChange"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="items">
        <div class="flex grid">
          <div title="padding-top">内边距-上</div>
          <div title="padding-bottom" class="ml5">内边距-下</div>
        </div>
        <div class="flex grid">
          <div>
            <el-input
              size="small"
              v-model="props.node.paddingTop"
              controls-position="right"
              @change="onChange"
            ></el-input>
          </div>
          <div class="ml5">
            <el-input
              size="small"
              v-model="props.node.paddingBottom"
              controls-position="right"
              @change="onChange"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="items gray" style="line-height: 1.5">
        内边距：输入数字表示像素；输入%表示百分比
      </div>
      <div class="title"></div>
      <div class="items">
        <div class="flex grid">
          <div class="custom-data">
            自定义数据
            <i
              :class="props.expand ? 'el-icon-zoom-out' : 'el-icon-zoom-in'"
              @click="changeExpand"
              size="small"
              >{{ props.expand ? '缩小' : '放大' }}</i
            >
          </div>
        </div>
        <div class="flex grid">
          <div :class="props.expand ? 'expand-data' : ''">
            <el-input
              type="textarea"
              v-model="nodeData"
              :rows="props.expand ? 15 : 3"
              @change="onChange"
            ></el-input>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nodeId: null,
      nodeIsJson: false,
      nodeData: ''
    }
  },
  props: {
    props: {
      type: Object,
      require: true
    }
  },
  updated() {
    if (!this.props.node || this.nodeId === this.props.node.id) {
      return
    }
    this.props.expand = false
    this.nodeId = this.props.node.id
    let originData = this.props.node.data
    this.nodeIsJson = this.isJson(originData)
    this.nodeData = this.nodeIsJson
      ? JSON.stringify(originData, null, 4)
      : (this.nodeData = originData)
  },
  methods: {
    onChange(value) {
      if (this.props.node) {
        this.props.node.data = this.nodeIsJson
          ? JSON.parse(this.nodeData)
          : this.nodeData
      }
      this.$emit('change', this.props.node)
    },
    changeExpand() {
      this.props.expand = !this.props.expand
    },
    isJson(obj) {
      return (
        typeof obj == 'object' &&
        Object.prototype.toString.call(obj).toLowerCase() ==
          '[object object]' &&
        !obj.length
      )
    }
  }
}
</script>

<style lang="scss">
.star {
  display: block;
  color: #f60 !important;
  text-decoration: underline;
  margin-bottom: 0.1rem;
}

.title {
  color: #0d1a26;
  font-weight: 600;
  padding: 0.05rem 0.15rem;
  border-bottom: 1px solid #ccc;
}

.group {
  margin: 0.1rem 0 0.2rem 0.3rem;
  padding: 0;

  a,
  li {
    line-height: 2;
  }

  li {
    list-style: initial;
  }
}

.bottom {
  position: absolute;
  bottom: 0.1rem;
}

.items {
  padding: 0.05rem 0.15rem;

  .el-input-number {
    width: 1.02rem;
    line-height: 0.32rem;

    .el-input__inner {
      padding-left: 0;
      padding-right: 40px;
      height: 0.34rem;
      line-height: 0.34rem;
    }

    .el-input-number__increase {
      line-height: 0.16rem;
    }
  }

  .custom-data i {
    cursor: pointer;
    float: right;
    color: #409eff;
    height: 2em;
    line-height: 2em;
  }

  .expand-data {
    position: absolute;
    right: 0.15rem;
    width: 5rem;
  }
}

.formItem {
  margin-bottom: 0.1rem;
}
</style>
