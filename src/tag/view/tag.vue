<script>
  export default {
    name: 'ElTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    render: function render(h) {
    var classes = ['el-tag', this.type ? 'el-tag--' + this.type : '', this.tagSize ? 'el-tag--' + this.tagSize : '', { 'is-hit': this.hit }];
    var tagEl = h(
      'span',
      { 'class': classes, style: { backgroundColor: this.color } },
      [this.$slots.default, this.closable && h('i', { 'class': 'el-tag__close el-icon-close', on: {
          'click': this.handleClose
        }
      })]
    );

    return this.disableTransitions ? tagEl : h(
      'transition',
      {
        attrs: { name: 'el-zoom-in-center' }
      },
      [tagEl]
    );
  }
  };
</script>
