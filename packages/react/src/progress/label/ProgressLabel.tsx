'use client';
import * as React from 'react';
import { useBaseUiId } from '../../utils/useBaseUiId';
import { useRenderElement } from '../../utils/useRenderElement';
import { useEnhancedEffect } from '../../utils/useEnhancedEffect';
import { useProgressRootContext } from '../root/ProgressRootContext';
import { progressStyleHookMapping } from '../root/styleHooks';
import type { ProgressRoot } from '../root/ProgressRoot';
import type { BaseUIComponentProps } from '../../utils/types';

/**
 * An accessible label for the progress bar.
 * Renders a `<span>` element.
 *
 * Documentation: [Base UI Progress](https://base-ui.com/react/components/progress)
 */
const ProgressLabel = React.forwardRef(function ProgressLabel(
  componentProps: ProgressLabel.Props,
  forwardedRef: React.ForwardedRef<HTMLSpanElement>,
) {
  const { render, className, id: idProp, ...elementProps } = componentProps;

  const id = useBaseUiId(idProp);

  const { setLabelId, state } = useProgressRootContext();

  useEnhancedEffect(() => {
    setLabelId(id);
    return () => setLabelId(undefined);
  }, [id, setLabelId]);

  const renderElement = useRenderElement('span', componentProps, {
    state,
    ref: forwardedRef,
    props: [
      {
        id,
      },
      elementProps,
    ],
    customStyleHookMapping: progressStyleHookMapping,
  });

  return renderElement();
});

namespace ProgressLabel {
  export interface Props extends BaseUIComponentProps<'span', ProgressRoot.State> {}
}

export { ProgressLabel };
