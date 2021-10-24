<script lang="tsx">
import { h, Fragment, defineComponent } from "vue";
import VerticalSheet from "./VerticalSheet.vue";
const times = require("lodash/times");
const React = { createElement: h, Fragment };

export interface SheetItem {
  img: string;
  id: string | number;
  name: string;
  swipe?: boolean;
}

export interface SheetData {
  sheetType: string;
  data: Array<SheetItem>;
}

export interface SheetInterface {
  title: string;
  titleIcon?: string;
  action?: string;
  actionIcon?: string;
  pageType: string;
  refresh(): void;
  sheetData: SheetData;
}

// export default defineComponent<SheetInterface>({

export default defineComponent({
  props: {
    title: {
      type: String,
      require: true,
      default: ""
    },
    titleIcon: {
      type: String,
      require: false,
      default: ""
    },
    action: {
      type: String,
      require: false,
      default: "更多 >"
    },
    actionIcon: {
      type: String,
      require: false,
      default: ""
    },
    pageType: {
      type: String,
      require: true,
      default: "sheet"
    },
    refresh: {
      type: Function,
      require: false,
      default: () => {}
    },
    sheetData: {
      type: Object,
      require: true,
      default: {
        type: "hoz",
        data: []
      }
    }
  },

  setup: props => {
    const {
      title,
      titleIcon,
      action,
      actionIcon,
      pageType,
      refresh,
      sheetData = {
        sheetType: "hoz",
        data: []
      }
    } = props;
    console.log(props, this);
    const sheetType = sheetData.sheetType === "hoz";

    const getItemClass = (sheet: SheetItem) => {
      if (pageType === "func") return "JIN-func-img";
      if (sheet.swipe) return "JIN-sheet-swipe";
      return "JIN-sheet-img";
    };

    const renderVertical = () => (
      <Fragment>
        {times(Math.max(sheetData.data.length / 3), Number).map(
          (num: number) => (
            <VerticalSheet data={sheetData.data.slice(num * 3, num * 3 + 2)} />
          )
        )}
      </Fragment>
    );

    const renderHoz = () => (
      <Fragment>
        {sheetData.data.map((sheet: SheetItem) => (
          <div key={sheet.id} class="JIN-sheet-item">
            <div class={getItemClass(sheet)}>
              <img alt="" src={sheet.img} />
            </div>
            <div
              class="JIN-sheet-name"
              style={{ WebkitBoxOrient: 'vertical' }}>{sheet.name}</div>
          </div>
        ))}
      </Fragment>
    );

    return () => (
      <div
        class="JIN-song-sheet"
        style={{
          paddingBottom: pageType === "func" ? "4.4rem" : 0,
          paddingTop: pageType === "func" ? "4.4rem" : 0
        }}
      >
        <div class="JIN-sheet-title">
          {titleIcon && (
            <img
              src={titleIcon}
              alt=""
              class="JIN-sheet-title-icon"
              onClick={() => refresh && refresh()}
            />
          )}
          {title}
        </div>
        <div class="JIN-sheet-action">
          {actionIcon && <img src={actionIcon} alt="" />}
          {action}
        </div>
        <div class="JIN-main-sheet">
          {sheetType ? renderVertical() : renderHoz()}
        </div>
      </div>
    );
  }
});
</script>

<style lang="less" scoped>
.JIN-song-sheet {
  padding: @padding;

  .JIN-sheet-title-icon {
    width: 50 / @rem;
    margin-right: 20 / @rem;
  }

  .JIN-sheet-title {
    font-size: 50 / @rem;
    float: left;
    line-height: 150 / @rem;
  }

  .JIN-sheet-action {
    float: right;
    height: 72 / @rem;
    line-height: 72 / @rem;
    border: 2 / @rem solid #e8e8e8;
    border-radius: 72 / @rem;
    font-size: 36 / @rem;
    padding: 0 33 / @rem;
    margin-top: 36 / @rem;

    img {
      margin-right: 12 / @rem;
      width: 24 / @rem;
    }
  }

  .JIN-main-sheet {
    clear: both;
    overflow-x: auto;

    .JIN-sheet-item {
      .JIN-func-img {
        width: 140 / @rem;
        height: 140 / @rem;
        border-radius: 50%;
        background-color: #fff3f7;
        img {
          width: 68;
        }
      }

      .JIN-sheet-img,
      .JIN-sheet-swipe {
        position: relative;
        margin-right: 30 / @rem;
        border: 1px solid #e1e1d9;
        img {
          width: 298 / @rem;
        }
      }

      > :last-of-type(".JIN-sheet-img") {
        margin-right: 0;
      }

      .JIN-sheet-img {
        &::before {
          position: absolute;
          content: "";
          height: 24 / @rem;
          width: 264 / @rem;
          border-radius: 24 / @rem;
          top: -12 / @rem;
          left: 50%;
          margin-left: -132 / @rem;
          background-color: #f3f3f3;
        }
      }

      .JIN-sheet-name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
    }
  }
}
</style>
