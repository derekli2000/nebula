import React from 'react';
import {Separator, SeparatorProps} from '../Separator';

interface JoinProps<T> {
  data: T[];
  separatorProps?: SeparatorProps;
  children: (item: T) => Element;
}

export const Join = <T extends any>({
  data,
  separatorProps,
  children,
}: JoinProps<T>) => {
  const list: Element[] = [];
  for (let i = 0; i < data.length - 1; i++) {
    const elem = children(data[i]);

    // @ts-ignore
    list.push(elem, <Separator key={elem.key + '-s'} {...separatorProps} />);
  }

  if (data.length > 0) {
    list.push(children(data[data.length - 1]));
  }

  return <>{list}</>;
};
