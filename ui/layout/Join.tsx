import React from 'react';
import {Separator, SeparatorProps} from '../Separator';

interface JoinProps<T> {
  data: T[] | undefined;
  separatorProps?: SeparatorProps;
  children: (item: T) => Element;
}

export const Join = <T extends any>({
  data,
  separatorProps,
  children,
}: JoinProps<T>) => {
  const list: Element[] = [];

  if (data) {
    for (let i = 0; i < data.length - 1; i++) {
      const elem = children(data[i]);

      list.push(
        elem,
        // @ts-ignore
        <Separator key={`${elem.key}-s${i}`} {...separatorProps} />,
      );
    }

    if (data.length > 0) {
      list.push(children(data[data.length - 1]));
    }
  }

  return <>{list}</>;
};
