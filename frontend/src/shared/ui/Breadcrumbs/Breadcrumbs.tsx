import React, { FC, ReactNode } from 'react';
import { Params, useMatches } from 'react-router-dom';
import { House, ChevronsRight } from 'lucide-react';

import { cn } from '@shared/index';

export interface IMatches {
  /** Route id. */
  id: string;
  /** The portion of the URL the route matched. */
  pathname: string;
  /**  The parsed params from the URL. */
  params: Params<string>;
  /** The data from the loader. */
  data: unknown;
  /** The <Route handle> with any app specific data. */
  handle: {
    crumb: (param?: IMatches) => React.ReactNode;
  };
}

interface IBreadcrumbs {
  /** The title of the route. */
  Title?: string;
  IsMainPage?: boolean;
}

const ExtractTextFromLink: FC<{ children: ReactNode }> = ({ children }) => {
  const extractText = (children: ReactNode): string => {
    let text = '';
    React.Children.forEach(children, (child) => {
      if (typeof child === 'string') {
        text += child;
      } else if (React.isValidElement(child) && child.props.children) {
        text += extractText(child.props.children);
      }
    });
    return text;
  };

  return <>{extractText(children)}</>;
};

export const Breadcrumbs: FC<IBreadcrumbs> = (props) => {
  const { Title, IsMainPage } = props;

  if (IsMainPage) {
    return (
      <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
        <div className="grow">
          <h1 className='text-center'>{Title}</h1>
        </div>
      </div>
    );
  }

  // @ts-ignore
  const matches: IMatches[] = useMatches();

  const crumbs = matches
    .filter((match) => Boolean(match.handle?.crumb))
    .map((match) =>
      typeof match.handle.crumb === 'function'
        ? match.handle.crumb(match)
        : match.handle.crumb,
    );

  const liClassName = 'group/breadcrumbs__item relative flex items-center';
  const liLastClassName = 'group/breadcrumbs__item text-slate-700';

  return (
    <div className="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div className="grow">
        <h1>{Title}</h1>
      </div>
      <ul className="breadcrumbs flex items-center gap-2 text-sm font-normal shrink-0">
        {crumbs.map((crumb, index) => (
          <li
            key={index}
            className={cn(
              index === crumbs.length - 1 ? liLastClassName : liClassName,
            )}
          >
            {index === 0 && <House className="h-3 stroke-slate-700" />}

            {index === crumbs.length - 1 ? (
              Title
            ) : (
              <>
                <span>{crumb}</span>
                <ChevronsRight className="h-3 stroke-slate-400" />
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
