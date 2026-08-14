import React from "react";
import {useParams} from "react-router-dom";

export default function ServiceDetail() {
  const {id} = useParams();
  return (
    <div className="page-container py-5">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Service Detail</h1>
      <p className="text-base text-slate-600">
        در حال نمایش اطلاعات فنی مشخصات هنگر با آی‌دی: {id}
      </p>
    </div>
  );
}
