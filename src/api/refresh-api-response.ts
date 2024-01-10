import {RefreshApiError} from "@/api/refresh-api-error";
import {RefreshApiListInfo} from "@/api/refresh-api-list-info";

export interface RefreshApiResponse<TData> {
    data: TData | undefined;
    listInfo: RefreshApiListInfo | undefined;

    success: boolean;
    error: RefreshApiError | undefined;
}
