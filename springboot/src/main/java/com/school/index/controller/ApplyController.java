package com.school.index.controller;

import com.school.index.pojo.Apply;
import com.school.index.service.ApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("apply")
public class ApplyController {

    @Autowired
    private ApplyService applyService;

    @RequestMapping("/applySub")
    @ResponseBody
    public String applySub(Apply apply) {
        return applyService.applySub(apply);
    }

}
