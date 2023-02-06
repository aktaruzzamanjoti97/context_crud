import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const Skeleton = ({ theme }) => {

    const themeClass = theme || 'light'

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <div className="skeleton-profile row">
                    <div className='col-12'>
                        <SkeletonElement type='title' />
                        <SkeletonElement type='time' />
                    </div>
                </div>
                <div>
                    <SkeletonElement type='text' />
                    <SkeletonElement type='thumbnail' />
                </div>

                <div className="row justify-content-between">

                    <div className="col-md-4">
                        <SkeletonElement  type='like' />
                    </div>
                    <div className="d-flex col-md-4">
                        <SkeletonElement  type='like' />
                    </div>
                </div>
                
                <div className="row ">
                <div className="d-flex col-md-12">
                <SkeletonElement type='text' />
                    </div>
                </div>
                {/* <SkeletonElement type='title'/>
                <SkeletonElement type='text'/>
                <SkeletonElement type='title'/>
                <SkeletonElement type='title'/> */}
            </div>
            <Shimmer />
        </div>
    );
};

export default Skeleton;

// import React from 'react'
// import ContentLoader from 'react-content-loader'

// const Skeleton = props => {
//   return (
//     <ContentLoader
//       speed={2}
//       width={400}
//       height={160}
//       viewBox="0 0 400 160"
//       backgroundColor="#d9d9d9"
//       foregroundColor="#ededed"
//       {...props}
//     >
//       <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
//       <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
//       <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
//       <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
//       <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
//       <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
//     </ContentLoader>
//   )
// }

// Skeleton.metadata = {
//   name: 'Abraham Calsin',
//   github: 'abrahamcalsin',
//   description: 'Loading a list of tasks.',
//   filename: 'TaskList',
// }

// export default Skeleton