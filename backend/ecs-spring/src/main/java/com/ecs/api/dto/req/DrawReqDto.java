package com.ecs.api.dto.req;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DrawReqDto {


    @JsonProperty("categoryNo")
    int categoryNo;

    @JsonProperty("drawPostTF")
    boolean drawPostTF;
}
