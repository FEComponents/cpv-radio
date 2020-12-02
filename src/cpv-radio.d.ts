import Vue, {VueConstructor} from 'vue'

/**
 * @FYI https://www.yuque.com/docs/share/a72a1b84-c0e4-4bd5-853f-6711cb08a507
 */
declare module '@fe-components/cpv-radio' {
  class VueComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type CpvRadioData = {}

  type CpvRadioMethods = {}

  type CpvRadioComputed = {}

  type CpvRadioProps = {}

  type CpvRadio = Combined<
    CpvRadioData,
    CpvRadioMethods,
    CpvRadioComputed,
    CpvRadioProps
  >

  export interface CpvRadioType extends VueComponent, CpvRadio {}

  const CpvRadioConstruction: ExtendedVue<
    Vue,
    CpvRadioData,
    CpvRadioMethods,
    CpvRadioComputed,
    CpvRadioProps
  >

  export default CpvRadioConstruction
}
