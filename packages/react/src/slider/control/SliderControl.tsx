'use client';
import * as React from 'react';
import type { BaseUIComponentProps } from '../../utils/types';
import { useComponentRenderer } from '../../utils/useComponentRenderer';
import { useSliderRootContext } from '../root/SliderRootContext';
import { sliderStyleHookMapping } from '../root/styleHooks';
import type { SliderRoot } from '../root/SliderRoot';
import { useSliderControl } from './useSliderControl';

/**
 * The clickable, interactive part of the slider.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Slider](https://base-ui.com/react/components/slider)
 */
const SliderControl = React.forwardRef(function SliderControl(
  props: SliderControl.Props,
  forwardedRef: React.ForwardedRef<HTMLDivElement>,
) {
  const { render: renderProp, className, ...otherProps } = props;

  const {
    commitValue,
    disabled,
    dragging,
    getFingerState,
    lastChangedValueRef,
    max,
    min,
    minStepsBetweenValues,
    registerSliderControl,
    setActive,
    setDragging,
    setValue,
    state,
    step,
    thumbRefs,
    values,
  } = useSliderRootContext();

  const { getRootProps } = useSliderControl({
    commitValue,
    disabled,
    dragging,
    getFingerState,
    lastChangedValueRef,
    max,
    min,
    minStepsBetweenValues,
    registerSliderControl,
    rootRef: forwardedRef,
    setActive,
    setDragging,
    setValue,
    step,
    thumbRefs,
    values,
  });

  const { renderElement } = useComponentRenderer({
    propGetter: getRootProps,
    render: renderProp ?? 'div',
    state,
    className,
    extraProps: otherProps,
    customStyleHookMapping: sliderStyleHookMapping,
  });

  return renderElement();
});

namespace SliderControl {
  export interface Props extends BaseUIComponentProps<'div', SliderRoot.State> {}
}

export { SliderControl };
