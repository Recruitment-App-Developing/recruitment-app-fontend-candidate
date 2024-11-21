function CompanyItem({ data }) {
    return (
        <div className="flex-center-col h-[424px] w-[420px] rounded bg-white">
            <div className="relative mb-4 h-[180px] w-full overflow-hidden bg-none">
                <a target="_blank" href={`/company-detail/${data.id}`}>
                    <div className="h-[150px] w-full">
                        <img
                            className="h-[150px] w-full rounded align-middle"
                            src={data.logo}
                            alt=""
                        />
                    </div>
                </a>
                <div
                    className="absolute bottom-0 left-4 h-16 w-16 rounded-md border-2 border-solid
                        border-slate-200 bg-white"
                >
                    <a className="" href={data.urlCom}>
                        <img
                            className="h-[62px] w-[62px] object-contain align-middle"
                            src={data.logo}
                            alt=""
                        />
                    </a>
                </div>
            </div>
            <div className="w-full flex-grow px-4">
                <h3 className="line-clamp-1 text-xl font-medium hover:underline">
                    <a target="_blank" href={`/company-detail/${data.id}`}>
                        {data.name}
                    </a>
                </h3>
                <p
                    className="base-normal h-[160px] w-full truncate text-wrap pt-3"
                    dangerouslySetInnerHTML={{ __html: data.detailIntro }}
                />
            </div>
        </div>
    );
}

export default CompanyItem;
