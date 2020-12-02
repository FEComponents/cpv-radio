<template>
  <FormItem
    :label="childProp.name"
    :prop="childProp.prop"
    :rules="ruleValidate"
  >
    <RadioGroup v-model="formData[childProp.prop]">
      <Radio
        v-for="item in childProp.childList"
        :key="item.valueName"
        :label="item.valueName"
        :value="item.id"
        ><span>{{ item.valueName }}</span>
      </Radio>
    </RadioGroup>
  </FormItem>
</template>

<script>
export default {
  name: 'CPVradio',
  props: {
    childProp: {
      type: Object
    },
    formData: {
      type: Object
    }
  },
  computed: {
    ruleValidate() {
      let childProp = this.childProp
      if (childProp.required) {
        //select 值类型判断   如数字则数字 如不符合为字符串
        let type =
          typeof childProp?.childList?.[0]?.value === 'number'
            ? 'number'
            : 'string'

        return [
          {
            required: true,
            type,
            message: '请选择' + childProp.name,
            trigger: 'change'
          }
        ]
      } else {
        return []
      }
    }
  }
}
</script>
