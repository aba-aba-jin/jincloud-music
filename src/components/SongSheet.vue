<script lang="tsx">
import { defineComponent } from "vue";

// interface SheetInterface {
//     title: String
// }

export default defineComponent({
    props: {
        title: {
            type: String,
            default: '',
        }
    },

    setup: (props) => {
        const { title } = props;

        return () => (
            <div>{title}</div>
        )
    }
})
</script>